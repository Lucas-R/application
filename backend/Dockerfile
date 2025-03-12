FROM node:18

ARG EXPOSE

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${EXPOSE}

CMD ["npm", "run", "dev"]