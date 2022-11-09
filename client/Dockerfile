FROM node:14

WORKDIR /CLIENT

COPY package.json .

RUN npm install

COPY ./src ./src

COPY ./config.js ./

CMD npm start