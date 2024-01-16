import React from 'react'; // jsx(js에서 xml 태그를 쓸 수 있게 확장해준 것)를 쓰기 위해 import해줌
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'; // BrowserRouter => 웹브라우저 라우팅 처리할 때 제일 많이 쓰는, 가장 보편적인 라우터임
import './index.css';
import App from './App'; // src > App.js를 의미함
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html의 <div id="root"></div>부분을 가져옴
root.render( // root 안에 App(즉, App.js)을 랜더링해줌
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 웹 퍼포먼스를 측정하기 위한 js 라이브러리
