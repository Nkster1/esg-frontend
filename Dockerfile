FROM node:16-buster

COPY . .
RUN npm install
RUN npm install -g serve

RUN npm run build

EXPOSE 80

ENTRYPOINT ["serve", "-s", "build"]

