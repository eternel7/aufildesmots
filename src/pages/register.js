import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

class RegisterPage extends Component {
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
        <CardTitle title="Register" subtitle="Association de mots"/>
        <CardText>
          <p>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </p>
        </CardText>
        <CardActions>
          <FlatButton label="OK"
                      secondary={true}
                      onClick={this.props.signUp}
          />
          <FlatButton label="CANCEL"
                      secondary={true}
                      onClick={this.props.signUp}
          />
        </CardActions>
      </Card>
    );
  }
}

export default RegisterPage;