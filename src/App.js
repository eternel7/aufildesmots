import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './theme';
import AppBarMots from './appBar';
import logo from './logo.svg';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import LoginRegister from './components/loginRegister';
import './App.css';
import pages from './pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      page: pages.default,
    };
  }


  askForSignIn = (e) => {
    console.log("askForSignIn top");
    this.setState({page: pages.Login, logged: true});
  };

  signIn = (e) => {
    console.log("signIn top");
    this.setState({logged: true});
  };

  askForSignUp = (e) => {
    console.log("askForSignUp top");
    this.setState({page: pages.Register});
  };

  signOut = (e) => {
    console.log("signOut top");
    this.setState({page: pages.default, logged: false});
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBarMots askForSignIn={this.askForSignIn} askForSignUp={this.askForSignUp}
                      signOut={this.signOut} logged={this.state.logged}/>
          <Card>
            <CardTitle title={this.state.page.title} subtitle={this.state.page.subtitle}/>
            <CardText>
              <p>
                Le but du jeu est de soumettre cinq mots que tu associes au mot proposé et
                de trouver les réponses les plus fréquemment données par les autres joueurs.
              </p>
              <img src={logo} className="App-logo" alt="logo"/>
              <p>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </p>

              <p>
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </CardText>
            <CardActions>
              <LoginRegister signIn={this.askForSignIn} signUp={this.askForSignUp}/>
            </CardActions>
          </Card>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
