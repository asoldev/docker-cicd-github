FROM node:18.17.1-alpine AS development

WORKDIR /usr/app

COPY --chown=node:node package*.json ./

RUN npm install --only=development

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
