FROM node:16
WORKDIR /auth

COPY ./package.json ./
COPY ./package-lock.json ./package-lock.json

RUN npm install --production

COPY . .

EXPOSE 5050
CMD ["node", "index.js"]
