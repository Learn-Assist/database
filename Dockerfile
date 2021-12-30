FROM node:14.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./build .

EXPOSE 8080

CMD [ "node", "index.js" ]