<!--
 * @Author: xbrucken
 * @Date: 2021-02-08 11:36:37
 * @LastEditors: xbrucken
 * @LastEditTime: 2021-02-08 12:08:41
-->
### 部署步骤：
* 下载依赖
    ```
    npm install
    ```
* 进入mock文件夹，开启json-server
    ```
    cd src/mock
    json-server -w classList.json -p 5000
    ```
* 再开一个终端，启动项目
    ```
    npm start
    ```

### 主要文件说明：
```
│  .eslintcache
│  config-overrides.js--------antd按需引入相关配置
│  package-lock.json   
│  package.json
│  yarn.lock
│
├─public----------------------静态资源
│
└─src
    │  App.css----------------通用样式
    │  App.jsx----------------主组件
    │  index.js---------------入口文件
    │
    ├─api
    │      api.js-------------接口
    │      request.js---------axios相关设置
    │
    ├─components
    │  ├─ClassCard------------我的班级
    │  │      index.css
    │  │      index.jsx
    │  │
    │  ├─Header---------------头部导航栏
    │  │      index.css
    │  │      index.jsx
    │  │
    │  ├─MemberCard-----------查看班级成员
    │  │      index.jsx
    │  │
    │  └─Sidebar--------------左侧栏
    │          index.css
    │          index.jsx
    │
    ├─mock
    │      classList.json------模拟数据
    │
    └─pages--------------------容器组件
        ├─AddClass-------------创建班级
        │      index.css
        │      index.jsx
        │
        ├─MyClass--------------具体班级
        │      index.css
        │      index.jsx
        │
        └─ShowMember-----------具体成员
                index.css
                index.jsx
```


### 待完成的部分：
* 页面自适应、高分屏适配
* 未解决的警告：（已经加了唯一的key值但是依然报错）
    Warning: Each child in a list should have a unique "key" prop.
