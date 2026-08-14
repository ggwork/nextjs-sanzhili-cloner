## 项目介绍

复制旧官网 http://www.sanzhili-pm.com

## 使用技术
nextjs

## docker 部署方法

### 1. 克隆仓库
git clone 仓库地址 && cd nextjs-sanzhili-cloner

### 2 启动docker
确认 .env.production 中的 SMTP 配置正确
docker compose up -d --build

## docker常见命令

构建
docker compose up -d --build

查看日志
docker compose logs -f

停止
docker compose down
