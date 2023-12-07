FROM node:16.15.1 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

FROM base as production

ENV NODE_PATH=./dist

