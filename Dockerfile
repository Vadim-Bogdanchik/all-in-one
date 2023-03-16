# Use an official Node runtime as a parent image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files for the first site to the container
COPY site1/package*.json ./site1/

# Install dependencies for the first site
RUN cd site1 && npm install

# Copy the source code for the first site to the container
COPY site1/ ./site1/

# Build the production version of the first site
RUN cd site1 && npm run build

# Copy package.json and package-lock.json files for the second site to the container
COPY site2/package*.json ./site2/

# Install dependencies for the second site
RUN cd site2 && npm install

# Copy the source code for the second site to the container
COPY site2/ ./site2/

# Build the production version of the second site
RUN cd site2 && npm run build

# Expose the ports that the sites will be served on
EXPOSE 3000
EXPOSE 3001

# Start the first site
CMD ["npm", "run", "-C", "site1", "start"]

# Start the second site
CMD ["npm", "run", "-C", "site2", "start"]

