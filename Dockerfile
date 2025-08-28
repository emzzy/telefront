ARG NODE_VERSION=22.18.0

FROM node:${NODE_VERSION}-alpine AS base
# Set working directory for all build stages.
WORKDIR /usr/src/app
FROM base AS dependencies

# Copy only dependency files
COPY package*.json ./

RUN npm install

FROM base AS  final

ENV NODE_ENV=development

COPY --from=dependencies /usr/src/app/node_modules ./node_modules

COPY . .

EXPOSE 3000

# Run the application.
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
# CMD ["npm", "run", "dev"]
