FROM node:14.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./build .

CMD [ "node", "index.js" ]