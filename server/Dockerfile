FROM node:14

WORKDIR /SERVER

COPY package.json .

RUN npm install

COPY ./src ./src

COPY ./config.js ./

CMD npm start


