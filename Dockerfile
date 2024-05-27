
# official Nodejs image 
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install pm2 -g

# Copy the entire project 
COPY . .

# Start server
#RUN node server.js

EXPOSE 3000 3001

#CMD ["npm", "start"]

# Use PM2 to run server.js and npm start
CMD ["pm2-runtime", "pm2.json"]
