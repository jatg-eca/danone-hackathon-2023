FROM node:19-alpine3.15 as locked-dependencies
WORKDIR /app
COPY package-lock.json package-lock.json
COPY angular.json angular.json
COPY tsconfig.app.json tsconfig.app.json
COPY tsconfig.json tsconfig.json
COPY package.json package.json

FROM node:19-alpine3.15 as dependencies
WORKDIR /app
COPY --from=locked-dependencies app/package-lock.json ./package-lock.json
COPY package.json package.json
RUN npm install

FROM node:19-alpine3.15 as build
WORKDIR /app
COPY --from=dependencies app/node_modules ./node_modules
COPY src/ src/
COPY package.json package.json
COPY --from=locked-dependencies app/. .
RUN npm run build

FROM nginx:1.23.3 as serve
EXPOSE 80
COPY --from=build app/dist/weekend-project/. /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]