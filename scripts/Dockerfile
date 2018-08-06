FROM node:latest

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install --quiet

COPY . .

COPY ./provisioning/keepalive.sh /tmp/keepalive.sh

#RUN chmod +x /tmp/keepalive.sh
CMD [ "/tmp/keepalive.sh"]