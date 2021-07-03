import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route}  from "react-router-dom"
import {Chat} from "./Components/Chat/Chat"
import {Join} from "./Components/Join/Join"



function App() {
  return (
    <Router >
      <Route path="/" exact component={Join}></Route>
      <Route path="/chat" component={Chat}></Route>
    </Router>
  );
}

export default App;
