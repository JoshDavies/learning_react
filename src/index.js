import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));

function MyInfo() {
  return (
    <div>
      <h1>Josh Davies</h1>
      <p>learning react.js</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo/>, document.getElementById("root"))
