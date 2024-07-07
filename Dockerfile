# Stage 1: Build the application
FROM node:20-alpine AS builder

# Enable Corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Generate Prisma client
RUN pnpm prisma generate

# Build the application
RUN pnpm build

# Stage 2: Run the application
FROM node:20-alpine

# Enable Corepack and install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

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
CMD ["node", "dist/main"]
