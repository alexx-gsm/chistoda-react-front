import React, { Component } from 'react';
import Logo from './components/logo/Logo';
import PhoneMe from './components/phone-me/PhoneMe';
import ToolMenu from './components/tool-menu/ToolMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
          <div className="row no-gutters">
              <div className="col-xs-12 col-xl-2"><Logo /></div>
              <div className="col-xs-12 col-xl-3"><PhoneMe /></div>
              <div className="col-xs-12 col-xl-7"><ToolMenu /></div>

          </div>

      </div>
    );
  }
}

export default App;
