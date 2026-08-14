# ---- Builder stage ----
FROM node:24-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# .env.production is loaded by Next.js at build time to inline NEXT_PUBLIC_* vars
RUN npm run build

# ---- Runner stage ----
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Copy standalone server output
COPY --from=builder /app/.next/standalone ./
# Copy static assets (not included in standalone bundle)
COPY --from=builder /app/.next/static ./.next/static
# Copy public assets
COPY --from=builder /app/public ./public
# Copy i18n message catalogues (used by dynamic import at runtime)
COPY --from=builder /app/messages ./messages

EXPOSE 3000

CMD ["node", "server.js"]
