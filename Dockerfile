FROM node:16
WORKDIR /auth

COPY ./front/package.json ./front/
COPY ./front/yarn.lock ./front/yarn.lock

COPY ./api/package.json ./api/
COPY ./api/package-lock.json ./api/package-lock.json

RUN cd ./api && npm install --production
RUN cd ./front && npm install --production

COPY . .

RUN cd ./front && npm run build

EXPOSE 5050
CMD cd ./api && npm start
