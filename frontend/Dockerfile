FROM node:alpine
WORKDIR /frontend
COPY package.json .
RUN npm --force install 
COPY . .
COPY ./src /frontend/src
CMD ["npm", "start"]