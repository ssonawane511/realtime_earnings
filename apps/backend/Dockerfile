FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY apps/backend/package*.json ./apps/backend/

# Install dependencies
RUN npm install

# Copy backend source
COPY apps/backend ./apps/backend

# Build TypeScript
WORKDIR /app/apps/backend
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
COPY apps/backend/package*.json ./apps/backend/
RUN npm install --production

# Copy built application
COPY --from=builder /app/apps/backend/dist ./apps/backend/dist
COPY --from=builder /app/apps/backend/package*.json ./apps/backend/

WORKDIR /app/apps/backend

# Expose port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
