## git操作
### 远程仓库有内容（公司有功能）
* 将远程仓库内容克隆到本地来  
  * git clone url
* 切换到dev分支进行开发
  * git checkout -b dev
* 写完某个功能，要提交dev分支远程仓库去
  * 本地仓库管理
    * git add .
    * git commit -m 'xxx'
  * 提交远程仓库去
    * git push origin dev  
    
## 本地仓库有内容
* 新建远程仓库
  * 去github新建一个仓库
* 本地仓库进行管理
  * git init
  * git add .
  * git commit -m 'xxx'
* 将本地仓库和远程仓库关联起来
  * git remote add origin url
* 切换到dev分支进行开发
  * git checkout -b dev  
* 写完某个功能，要提交dev分支远程仓库去
  * 本地仓库管理
    * git add .
    * git commit -m 'xxx'
  * 提交远程仓库去
    * git push origin dev  
    
## 问题：远程仓库有两分支master和dev
* 如果通过克隆只能获取master分支上的内容
* 我需要dev分支的内容：
  * git checkout -b dev origin/dev  将远程仓库dev分支克隆到本地dev分支上

  {
    "name": "gzhipin-client",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "antd-mobile": "^2.2.6",
      "react": "^16.6.0",
      "react-dom": "^16.6.0",
      "react-scripts": "2.1.0"
    },
    "scripts": {
      "start": "react-app-rewired start",
      "build": "react-app-rewired build",
      "test": "react-app-rewired test --env=jsdom",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": "react-app"
    },
    "browserslist": [
      ">0.2%",
      "not dead",
      "not ie <= 11",
      "not op_mini all"
    ],
    "devDependencies": {
      "babel-plugin-import": "^1.11.0",
      "less": "^2.7.3",
      "less-loader": "^4.1.0",
      "react-app-rewired": "^1.6.2"
    }
  }
