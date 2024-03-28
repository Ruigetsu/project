FROM node:alpine
RUN mkdir /frontend
WORKDIR /frontend
COPY . .
RUN npm install

CMD ["npm", "start"]