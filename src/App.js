import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './screen/landing/landing';
import Board from './screen/Board/bord';
import Video from './screen/video/video';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/'>
            <Landing/>
        </Route>

        <Route path='/board'>
            <Board/>
        </Route>

       

      

      </Router>
    </div>
  );
}

export default App;
