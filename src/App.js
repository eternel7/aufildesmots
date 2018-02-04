import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
import AppBarMots from './appBar';
import homePage from './pages/home';
import loginPage from './pages/login';
import registerPage from './pages/register';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  signIn = (e) => {
    console.log("signIn top");
    this.setState({logged: true});
  };

  signOut = (e) => {
    console.log("signOut top");
  };

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="App">
            <AppBarMots signOut={this.signOut} logged={this.state.logged}/>
            <Route exact path="/" component={homePage}/>
            <Route path="/home" component={homePage}/>
            <Route path="/login" component={loginPage}/>
            <Route path="/register" component={registerPage}/>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
