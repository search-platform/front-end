# TODO: migrate future versions to multi-step build
# https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/production/Dockerfile

FROM node:18.14-alpine

WORKDIR /app

COPY . .

RUN npm install --quiet
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
