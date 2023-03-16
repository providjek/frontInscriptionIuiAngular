#stage 1
FROM node:latest as node
# FROM node:alpine as node
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build --prod

#stage 2
FROM nginx:alpine
# FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/front-end-inscription-iui /usr/share/nginx/html
