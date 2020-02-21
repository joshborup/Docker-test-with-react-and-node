FROM node:lts-slim

RUN mkdir -p /usr/src/app
RUN npm i nodemon -g
WORKDIR /usr/src/app

EXPOSE 4000

# You can change this
CMD [ "npm", "run", "dev" ]