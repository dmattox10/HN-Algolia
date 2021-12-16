# # Build
# FROM node:16-alpine AS build
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN yarn

# # Deploy
# FROM node:16-alpine
# RUN apk add dumb-init
# ENV NODE_ENV development # In docker-compose to easily switch
# EXPOSE 3000
# USER node
# WORKDIR /usr/src/app
# COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
# COPY --chown=node:node . /usr/src/app
# CMD ["dumb-init", "yarn", "start"]

FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.19-alpine AS server
COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html