# Stage 1: Build TypeScript
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and compile TypeScript
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Only copy necessary files
COPY package*.json ./
COPY --from=builder /app/dist ./dist
RUN npm install --omit=dev

# Set environment variable defaults
ENV PORT=3000
ENV COLOR=lightblue

# Expose the port
EXPOSE 3000

# Run the server
CMD ["node", "dist/index.js"]
