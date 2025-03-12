FROM node:18

ARG EXPOSE

WORKDIR /frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE ${EXPOSE}

CMD [ "npm", "run", "dev" ]