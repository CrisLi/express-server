FROM node:latest

ENV APP_DIR=/usr/app
ENV PORT=3000
ENV HOST_DIR=$APP_DIR/public

RUN mkdir -p $APP_DIR
COPY . $APP_DIR

WORKDIR $APP_DIR

RUN npm install

EXPOSE $PORT

CMD ["npm", "start"]
