import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather Location (appp de clima)!
        <WeatherLocation />
      </div>
    );
  }
}

export default App;
