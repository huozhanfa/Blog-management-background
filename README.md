# 基于react16+antd+ react-router4+ react-redux+webpack+node+express+Mongo博客后台管理

> ## 1.文件说明：
- admin:使用create-react-app创建的所有前端页面文件
- serve：后端代码以及数据库

> ## 2.如何运行：
- 代码下载到本地后，进入admin和serve分别进行
```
npm install 或者 cnpm install 或者 yarn install
```
- 进入admin，运行

```
npm run serve 或者 yarn start
```
- 进入serve,运行
```
npm run serve(本机装有nodemon可使用此命令) 或者 node index.js
```
- 注意：后端使用的是4000端口，如果4000端口被占用需要使用其他端口请到admin/src/utils目录下的config.js和http.js更改本机使用的端口
- 使用浏览器打开 http://localhost:3000/login
(如果3000端口已被占用地址可能不一样)，在两个输入框随便输入东西进行提交后(会显示用户不存在)，使用以下用户进行登陆,登陆后可自己建立其他管理员,同时删除serve/routes/admin/index.js中标注删除的代码：
```
username:admin
password:admin
```

> 结束语：目前还有一些bug，后续会优化代码以及拓展功能
