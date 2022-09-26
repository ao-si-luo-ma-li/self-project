FROM node:12.16.2

# Set app directory
WORKDIR /root/app

# environment variable

# Install app dependencies
COPY package.json /root/app/
RUN npm install --registry=https://registry.npm.taobao.org

# Bundle app source
COPY . /root/app/

# Build app source
RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
