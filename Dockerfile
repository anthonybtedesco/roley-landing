# Use an official Node.js runtime as the base image
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

ENV DATABASE_URL postgresql://wilma:000t3@mR0l3y000wilma000@127.0.0.1:5432/roley

RUN chmod +x run.sh

RUN apt-get update && apt-get install -y curl wget gnupg

RUN curl -o cloud-sql-proxy https://storage.googleapis.com/cloud-sql-connectors/cloud-sql-proxy/v2.8.1/cloud-sql-proxy.linux.amd64 \
    && chmod +x cloud-sql-proxy \
    && ./cloud-sql-proxy \
--credentials-file roley-cloud-de0328318c72.json roley-cloud:us-central1:roley-postgres & \
    npm run build


CMD [ "sh", "-c", "./run.sh" ]
