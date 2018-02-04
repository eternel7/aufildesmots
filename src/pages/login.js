import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import '../App.css';

class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  askForForgottenPassword = (e) => {
    console.log("askForForgottenPassword Login");
  };

  signIn = (e) => {
    console.log("signIn Login");
    this.setState({logged: true});
  };

  askForSignUp = (e) => {
    console.log("askForSignUp Login");
  };

  render() {
    return (
      <Card>
        <CardTitle title="Login" subtitle="Association de mots"/>
        <CardText>
          <p>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </p>
        </CardText>
        <CardActions>
          <FlatButton label="LOGIN"
                                                   secondary={true}
                                                   onClick={this.props.signUp}
        />
          <FlatButton label="CANCEL"
                      secondary={true}
                      onClick={this.props.signUp}
        />
          <Link to="/register">Sign Up</Link>
          <Link to="/forgottenPassword">Forgotten password</Link>
        </CardActions>
      </Card>
    );
  }
}

export default loginPage;