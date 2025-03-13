FROM node:18

ARG EXPOSE

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE ${EXPOSE}

CMD ["npm", "run", "dev"]