# 使用一个基础的 Node 镜像
FROM node:21.5-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 复制所有项目文件到工作目录
COPY . .

# 安装 pnpm 到全局
RUN npm install -g pnpm

# 安装所有依赖（包括 devDependencies）
RUN pnpm install --production

# 执行构建命令
RUN pnpm run build

# 全局安装 pm2
RUN npm install -g pm2

# 暴露应用端口
EXPOSE 8000

# 使用 pm2 启动应用
CMD ["pm2-runtime", "npm", "--", "run", "start"]
