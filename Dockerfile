FROM node:18.12-alpine3.16 as production

ARG NODE_ENV=production
ARG PORT=3000
ENV PORT=${PORT}
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY dist ./dist
COPY .npmrc ./

EXPOSE $PORT

CMD ["node", "--enable-source-maps", "./dist/main"]
