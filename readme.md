## 搭建项目

##### 1.初始项目

```
# 创建项目
mkdir itemall-server
# 进入
cd itemall-server
# 初始化
npm init -y
# 安装依赖
npm i koa koa-multer koa-router koa-bodyparser koa-cors koa-static uuid mysql2
npm i nodemon -D
```

##### 2.修改package

```json
{
	"name": "itemall-server",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"start": "nodemon ./src/app.js"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	"dependencies": {
		"koa": "^2.13.4",
		"koa-bodyparser": "^4.3.0",
		"koa-cors": "^0.0.16",
		"koa-multer": "^1.0.2",
		"koa-router": "^12.0.0",
		"koa-static": "^5.0.0",
		"mysql2": "^2.3.3",
		"uuid": "^9.0.0"
	},
	"devDependencies": {
		"nodemon": "^2.0.20"
	}
}
```

##### 3.项目目录

<img src="C:\Users\25547\AppData\Roaming\Typora\typora-user-images\image-20220924152007504.png" alt="image-20220924152007504" style="zoom:50%;" />