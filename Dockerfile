FROM node:20-alpine AS builder
WORKDIR /app

# Install missing dependencies
RUN apk add --no-cache libgcc libstdc++ openssl

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .
COPY src/prisma ./src/prisma

# Generate Prisma client
RUN yarn prisma:generate

# Build application
ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install only required dependencies (Prisma client)
RUN yarn add @prisma/client

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/src/prisma ./src/prisma

# Set user for security
USER node

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
