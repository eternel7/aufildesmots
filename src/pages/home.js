import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import logo from '../logo.svg';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import LoginRegister from '../components/loginRegister';
import '../App.css';

class homePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  askForSignIn = (e) => {
    console.log("askForSignIn home");
    this.props.history.push('/login');
    //this.setState({logged: true});
  };

  askForSignUp = (e) => {
    console.log("askForSignUp home");
    this.props.history.push('/register');
  };

  signOut = (e) => {
    console.log("signOut home");
  };

  render() {
    return (
      <Card>
        <CardTitle title="Au fil des mots" subtitle="Association de mots"/>
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
            To get started, edit <code>src/App.js</code> and save to reload. What!
          </p>
        </CardText>
        <CardActions>
          <LoginRegister signIn={this.askForSignIn} signUp={this.askForSignUp}/>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter(homePage);
