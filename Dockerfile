# Use Node.js as the base image
FROM node:20.9.0-alpine3.18

RUN apk update && apk add --no-cache python3 make g++ xdg-utils curl

# Set the working directory
WORKDIR /usr/src/app

# Install nx
RUN yarn global add nx@20.5.0

# Install the Nest CLI globally
RUN yarn global add @nestjs/cli@10.4.8

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./
# Install project dependencies
RUN yarn install

# Copy your entire project EXCEPT node_modules (which should be in .dockerignore)
COPY . .

# Run codegen-api with explicit path
RUN yarn codegen-api

WORKDIR /usr/src/app/shared

RUN npx prisma generate

RUN npx ts-node prisma/seed.ts

# Build the NestJS project
WORKDIR /usr/src/app
RUN npx nx build api

# Copy entrypoint script into the image
COPY entrypoint.sh /entrypoint.sh

# Make entrypoint script executable
RUN chmod +x /entrypoint.sh

# Set the entrypoint script as the entrypoint for this Docker image
ENTRYPOINT ["/entrypoint.sh"]
