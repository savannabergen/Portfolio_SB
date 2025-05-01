FROM node:23-slim

WORKDIR /final_site

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5575

ENV NODE_ENV=production

CMD ["npm", "start"]