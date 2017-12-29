import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';

/**
 * When not log login button is available
 */
class LoginRegister extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <span>
        <FlatButton label="Login"
                    primary={true}
                    onClick={this.props.signIn}
        />
        <FlatButton label="Register"
                    secondary={true}
                    onClick={this.props.signUp}
        />
      </span>
    );
  }
}
export default LoginRegister;