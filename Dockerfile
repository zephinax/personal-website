# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

RUN npm install

# Copy the rest of the project
COPY . .

# Build Next.js
RUN npm run build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

# Copy only required files for production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3004

CMD ["npm", "run", "start"]
