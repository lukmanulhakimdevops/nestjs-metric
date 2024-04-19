FROM node:lts as builder

WORKDIR /usr/src/app

COPY /nestjs-docker/package*.json ./

RUN npm install

COPY /nestjs-docker/. .

RUN npm run build

CMD [ "node", "dist/main.js" ]