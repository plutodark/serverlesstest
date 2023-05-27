FROM ubuntu:20.04

# Install required dependencies
RUN apt-get update && apt-get install -y curl

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Install Yarn globally
RUN npm install -g yarn@1.22.19

# Install Git
RUN apt-get install -y git

# Install Serverless Framework globally
RUN yarn global add serverless@3.31.0

# docker build -t plutodark/serverless:2023 .
# docker push plutodark/serverless:2023