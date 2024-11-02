# Use the official Nginx image as the base
FROM nginx:alpine

# Install Git
RUN apk add --no-cache git

# Set the working directory
WORKDIR /usr/share/nginx/html

# Clear the directory (Be careful with this approach)
RUN rm -rf * 

# Clone your GitHub repository
RUN git clone https://github.com/yusufkaya01/testDataBreach.git .

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
