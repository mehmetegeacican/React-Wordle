FROM node:14-alpine AS development
ENV NODE_ENV development
#CONFIG FOR THE REACT 
WORKDIR /usr/src/app
COPY package*.json ./
COPY . . 

RUN npm i

CMD ["npm","run","start"]
