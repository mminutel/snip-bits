import React, { Component } from 'react';
import Header               from '../components/Header';
import Snippets             from '../containers/Snippets'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Snippets />
      </div>
    );
  }
}

export default App;
