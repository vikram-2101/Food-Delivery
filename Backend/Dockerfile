FROM node:18

# Create app directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy rest of the code
COPY . .

# Start the server
CMD ["node", "server.js"]
