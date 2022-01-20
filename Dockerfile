FROM node:16
WORKDIR /auth

COPY ./package.json .
COPY ./package-lock.json .
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 5050
CMD ["npm", "start"]