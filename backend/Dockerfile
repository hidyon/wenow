FROM node:14.3.0-stretch-slim

RUN mkdir -p /home/backend
# install the dependancies
COPY ./package*.json /home/backend/
WORKDIR /home/backend
RUN npm install
# copy my application files(html,css,js, etc.)
COPY . .
EXPOSE 3000

CMD ["node", "index"]


