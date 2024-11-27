FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "dev"]
