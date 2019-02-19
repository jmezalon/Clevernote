import React, { Component } from 'react';
import { Sidebar } from './components/Sidebar';
import AllNotes from './components/AllNotes';
import SignUp from './components/SignUp';
import Trash from './components/Trash.js';
import Notebooks from './components/Notebook.js';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/signup" component={SignUp} />
        <div className="loggedin">
        <Route exact path="/" component={Sidebar} />
        <Switch>
            <Route exact path="/notes" component={AllNotes} />
            <Route exact path="/notebooks/2/notes" component={Trash} />
            <Route exact path="/notebooks" component={Notebooks} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
