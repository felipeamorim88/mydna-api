FROM node:18.12

ENV HOME=/home/app

RUN apt-get update -y

COPY package.json package-lock.json $HOME/node_docker/

WORKDIR $HOME/node_docker

RUN npm install --silent --progress=false

COPY . $HOME/node_docker

EXPOSE 3000