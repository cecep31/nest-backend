# Stage 1: Build the application
FROM oven/bun:1-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN bunx prisma generate

# Build the application
RUN bun run build

# Stage 2: Run the application
FROM oven/bun:1-alpine

# Set working directory
WORKDIR /app

# Copy node_modules and built files from the first stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Copy necessary files
COPY package.json ./

# Expose the application port
EXPOSE 3000

# Set the command to start the application
CMD ["bun", "dist/main.js"]
