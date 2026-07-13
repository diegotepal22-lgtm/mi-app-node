# ETAPA 1: BUILDER
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install  # ← CAMBIA npm ci POR npm install
COPY src ./src
RUN npm run build

# ETAPA 2: PRODUCCIÓN
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --only=production && npm cache clean --force  # ← CAMBIA npm ci POR npm install
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]