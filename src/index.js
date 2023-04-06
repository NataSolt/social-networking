import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {
  debugger
  root.render(
    <BrowserRouter>
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} 
      addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
    </React.StrictMode>
    </BrowserRouter>
  );
}
 renderEntireTree(state);
 subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();