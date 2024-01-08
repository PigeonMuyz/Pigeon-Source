# 使用一个基础的 Node 镜像
FROM node:21.5-alpine as build

# 设置工作目录
WORKDIR /usr/src/app

# 复制所有项目文件到工作目录
COPY . .

# 安装所有依赖（包括 devDependencies）
RUN npm install -g pnpm && \
    pnpm install --production

# 构建应用
RUN npm run build

# 使用一个新的基础镜像，只包含运行时所需的文件和依赖
FROM node:21.5-alpine

# 设置工作目录
WORKDIR /usr/src/app

# 从上一个阶段复制构建好的应用和依赖
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./

# 暴露应用端口
EXPOSE 8000

# 定义默认的启动命令
CMD [“npm”, “run”, "start:prod"]
