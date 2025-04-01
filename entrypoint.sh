#!/bin/sh

# Run database migrations
cd shared && npx prisma migrate deploy

# Start the NestJS server

cd .. && node dist/apps/api/main.js
