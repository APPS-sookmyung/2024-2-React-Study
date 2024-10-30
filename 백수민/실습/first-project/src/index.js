import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById("root"); // index.html의 div를 dom api를 통해서 가져오기
const root = ReactDOM.createRoot(rootElement); // 해당 div를 리액트 dom의 최상위 노드로 만들어준다
root.render(<App />); // render 메소드를 통해서 하위 요소들을 렌더링 해 줍니다.
// App.js가 root에 렌더링 됨
