import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const DATA = [
  { id: "todo-0", name: "Buy Shampoo/3pm", completed: true, visible: true},
  { id: "todo-1", name: "Take the dog for a walk/8am", completed: false, visible: true},
  { id: "todo-2", name: "Mail letter/12pm", completed: false, visible: true}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks = {DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
