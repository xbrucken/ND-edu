/*
 * @Author: your name
 * @Date: 2021-02-06 21:24:44
 * @LastEditTime: 2021-02-06 22:52:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nd-edu\src\index.js
 */
//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
//引入App组件
import App from './App'

//渲染App到页面
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'))
