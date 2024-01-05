# 使用一个基础的 Node 镜像
FROM node:current-bullseye

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 package-lock.json 文件，优先安装依赖以提高构建速度
COPY package*.json ./
RUN npm install

# 复制所有项目文件到工作目录
COPY . .

# 构建应用
RUN npm run build

# 暴露应用端口
EXPOSE 8000

# 定义默认的启动命令
CMD ["npm", "start"]
