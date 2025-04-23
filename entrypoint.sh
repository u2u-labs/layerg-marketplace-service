#!/bin/sh

# Run database migrations
cd shared && npx prisma migrate deploy

# Start the NestJS server
#!/bin/sh
if [ "$SERVICE" = "worker" ]; then
  cd .. && node dist/apps/worker/main.js
else
  cd .. && node dist/apps/api/main.js
fi