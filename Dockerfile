
ARG NODE_VERSION=22.18.0

# Stage 1: Base
FROM node:${NODE_VERSION}-alpine AS base

WORKDIR /usr/src/app

# Stage 2: Dependencies
FROM base AS dependencies

COPY package*.json ./

RUN npm ci

# Stage 3: Build
FROM dependencies AS build

COPY . .

RUN npm run build

# Stage 4: Production
FROM nginx:alpine AS final

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
