# Use an official Node.js runtime as the base image
FROM node:23-slim

# Set the working directory in the container
WORKDIR /bergen_savanna_final_site

# Copy the .npmrc file to the working directory
COPY .npmrc /root/.npmrc

# Copy the package*.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port the application will run on
EXPOSE 5575

# Run the command to start the development server
CMD ["npm", "run", "dev"]