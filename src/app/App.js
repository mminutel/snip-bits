import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body'
import { Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Body />
        </Grid>
      </div>
    );
  }
}

export default App;
