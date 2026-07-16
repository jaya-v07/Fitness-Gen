# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of your React app code
COPY . .

# Expose Vite/React dev port
EXPOSE 5173

# Start the React development server
CMD ["npm", "run", "dev", "--", "--host"]