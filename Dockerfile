# 使用一个基础的 Node 镜像
FROM node:21.5-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 复制所有项目文件到工作目录
COPY . .

# 安装所有依赖（包括 devDependencies）
RUN npm install -g pnpm && \
    pnpm install --production && \
    pnpm run build

# 暴露应用端口
EXPOSE 8000

# 定义默认的启动命令
CMD ["npm", "run", "prod"]
