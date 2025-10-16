# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

# نصب وابستگی‌ها
RUN npm install

# ساخت پروژه (Next.js, React, etc.)
RUN npm run build

# Stage 2: Run
FROM node:20-alpine

WORKDIR /app

# کپی فایل‌های لازم از مرحله‌ی build
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# پورت
EXPOSE 3004

# فرمان اجرا
CMD ["npm", "run", "start"]
