FROM node:14.3.0-alpine3.10 as build-stage

RUN mkdir -p /home/frontend
# install the dependancies
COPY ./package*.json /home/frontend/
WORKDIR /home/frontend
RUN npm install
# copy application files (html, css, js, vue, etc.)
COPY . .
# build application
RUN npm run build

FROM nginx:1.17.10-alpine as production-stage
COPY --from=build-stage /home/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
 

