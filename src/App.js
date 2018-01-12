import React, { Component } from 'react';
import Header from './components/Header';
import Destaque from './components/Destaque';

class App extends Component {
  render() {
    return (
     <div>

     <Header />

      <div className="main-body-wrapper">
        <Destaque />
      </div>

    </div>
     
    );
  }
}
export default App;
