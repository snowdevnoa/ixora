# Use the official Node.js image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application
COPY . .

# Expose the port Vite will run on
EXPOSE 5173

# Run Vite server in development mode
CMD ["npm", "run", "dev"]
