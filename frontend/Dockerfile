FROM node:20.11.-alpine
RUN mkdir /frontend
WORKDIR /frontend
COPY package.json .
RUN npm install --force 
COPY . .
COPY ./src /frontend/src
CMD ["npm", "start"]