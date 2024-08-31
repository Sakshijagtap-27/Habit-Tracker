# Stage 1: Build stage
FROM node:21-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

COPY . .

# Stage 2: Production stage
FROM node:21-alpine

WORKDIR /usr/src/app

COPY --from=build /usr/src/app .

EXPOSE 3000

CMD ["npm", "start"]
