FROM node:latest
MAINTAINER John Eriksson <root@ranbogmord.com>

RUN npm install --global pm2

WORKDIR /code
ADD . /code
CMD pm2 start --no-daemon process.json