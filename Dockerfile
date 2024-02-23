# Use an official Node.js runtime as the base image
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

ENV DATABASE_URL postgresql://wilma:000t3@mR0l3y000wilma000@127.0.0.1:5432/roley

RUN chmod +x run.sh

RUN npm run build


CMD [ "npm", "run", "start" ]

