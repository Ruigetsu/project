FROM node:alpine
WORKDIR /frontend
COPY package.json .
RUN npm --force install 
RUN --max-old-space-size=4096
COPY . .
COPY ./src /frontend/src
CMD ["npm", "start"]