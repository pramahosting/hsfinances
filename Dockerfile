# ─────────────────────────────────────────────────────────────────────────────
# Stage 1 — Build the React app with Vite
# ─────────────────────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

LABEL stage="builder"
WORKDIR /app

# Install dependencies first (layer-cached until package.json changes)
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build
# Output: /app/dist

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2 — Serve via nginx (tiny production image)
# ─────────────────────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine AS production

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/hsfinances.conf

# Copy built React app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy legal PDFs and logo into the served directory
# Place hsflogo.jpeg and data/legal/*.pdf into public/ before building,
# OR copy them directly here if they live outside /app
COPY public/ /usr/share/nginx/html/

# Northflank expects the container to expose a port.
# Default: 80 (HTTP). Set PORT env var to override if needed.
EXPOSE 80

# Health check — Northflank polls /health
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]
