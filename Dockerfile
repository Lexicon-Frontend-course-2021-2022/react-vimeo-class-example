FROM mhart/alpine-node:16

WORKDIR /app

COPY . .

RUN npm ci --prod

EXPOSE 3000/tcp

CMD ["npm", "start"]
