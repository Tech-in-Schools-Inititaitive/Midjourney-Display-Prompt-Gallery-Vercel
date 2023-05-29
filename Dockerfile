# Use the official Node.js 16 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install project dependencies with the --legacy-peer-deps flag
RUN npm install --force

# Copy the rest of the project files to the working directory
COPY . .

# Expose the desired port for the application
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
