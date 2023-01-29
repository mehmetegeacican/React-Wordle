FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /data

RUN npm install -g json-server

COPY ./ ./

EXPOSE 3001 
CMD ["json-server" , "--watch" , "./db.json", "--port", "3001" ,"--host" ,"0.0.0.0"]