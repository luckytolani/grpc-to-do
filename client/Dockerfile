FROM node:14

WORKDIR /TASK-APP

COPY package.json .

RUN npm install

COPY ./src ./src

COPY ./config.js ./

CMD npm start