# Use a Node.js base image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy package files first for efficient caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the production server
CMD ["npm", "start"]

