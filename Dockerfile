# BUILD STAGE
FROM node:20.9.0-alpine3.18 AS builder

RUN apk update && apk add --no-cache python3 make g++

# Set the working directory
WORKDIR /usr/src/app

# Install nx and NestJS CLI
RUN yarn global add nx@20.5.0 @nestjs/cli@10.4.8

# Copy only package files first (better caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy source code
COPY . .

# Run codegen and Prisma tasks
RUN yarn codegen-api
WORKDIR /usr/src/app/shared
RUN npx prisma generate
RUN npx ts-node prisma/seed.ts

# Build the application
WORKDIR /usr/src/app
RUN npx nx build api

# PRODUCTION STAGE
FROM node:20.9.0-alpine3.18

RUN apk update && apk add --no-cache curl xdg-utils

WORKDIR /usr/src/app

# Copy package files
COPY package.json yarn.lock ./

# Install only production dependencies
RUN yarn install --production && yarn cache clean

# Copy built application from builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy Prisma files
COPY --from=builder /usr/src/app/shared/prisma ./shared/prisma
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /usr/src/app/node_modules/@prisma ./node_modules/@prisma

# Copy entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]