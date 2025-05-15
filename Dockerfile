FROM node:18-alpine

# Directories setup
RUN mkdir -p /app
WORKDIR /app

# System dependencies
COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .