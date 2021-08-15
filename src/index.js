// 引入react核心库，之前通过script标签引入
import React from 'react';
// 引入react-dom，之前通过script标签引入
import ReactDOM from 'react-dom';
// 引入样式（放初始化css）
import './index.css';
// 引入app根组件
import App from './App';
// 分析网页性能
import reportWebVitals from './reportWebVitals';
// 渲染组件到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
