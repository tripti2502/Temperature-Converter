# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the static files to the Nginx html directory
COPY src /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
