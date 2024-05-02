
# official Nodejs image 
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project 
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
