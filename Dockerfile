# generate build and running 
FROM node:lts-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma generate
RUN npm run build

# FROM alpine:latest as run
FROM node:lts-alpine as run
WORKDIR /app
COPY --from=build /app/dist/ .
EXPOSE 3001
CMD [ "node","main.js" ]
# CMD [ "bun","run","start" ]