FROM node:15
WORKDIR /app
COPY . ./
RUN npm install
EXPOSE 80
CMD ["node", "index.js"]