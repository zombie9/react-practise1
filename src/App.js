import React, { Component } from 'react';
import MainContent from './MainContent'
import Footer from './Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
          <MainContent />
          <Footer />
      </div>
    );
  }
}

export default App;
