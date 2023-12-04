FROM node:latest

RUN rm -f /usr/local/bin/yarn /usr/local/bin/yarnpkg

RUN npm install -g yarn

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]