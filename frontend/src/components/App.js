import React, { Component } from 'react';
import '../stylesheets/App.css';
import User from './User'

class App extends Component {

  render() {
    return (
      <div className="App">
        <User />
      </div>
    );
  }
}

export default App;