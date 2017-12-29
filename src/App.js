import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
import AppBarMots from './appBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBarMots></AppBarMots>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;