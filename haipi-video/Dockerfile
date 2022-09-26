# 采用多阶段构建

# 第一阶段：编译阶段
FROM node:12.16.2 as builder

# Set dist directory
WORKDIR /root/dist

# environment variable

# Install dist dependencies
COPY package.json /root/dist/
RUN npm install --registry=https://registry.npm.taobao.org

# Bundle dist source
COPY . /root/dist/

# build dist source
RUN npm run build

# 第二阶段：运行阶段

FROM nginx:latest

# 复制构建产物到nginx目录
COPY --from=builder /root/dist/build /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
