# Use the official Node.js image as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY ./package.json ./package-lock.json /app/

# Install the dependencies
RUN npm install --silent

# Copy the rest of the React app to the working directory
COPY . /app

# Build the React app for production
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
