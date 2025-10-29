FROM node:22-alpine AS builder

WORKDIR /app
COPY . .

RUN npm install

RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3004

CMD ["npm", "run", "start"]
