import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import socketIOClient from "socket.io-client"


const ENDPOINT = "http://localhost:2244";
const socket = socketIOClient(ENDPOINT)

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);


