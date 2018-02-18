import React, {Component} from 'react';
import FlatButton from 'material-ui/FlatButton';
import muiTheme from "../theme";
import buttonTextStyle from "../_constants/buttonStyle";
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';



/**
 * When not log login button is available
 */
class LoginRegister extends Component {
  static muiName = 'FlatButton';
  state = {
    redirectToReferrer: false
  };

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

/**
 * When not log-in vertical dots menu available
 * for connection or sign up
 */
class DotsNotLogged extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon style={buttonTextStyle} color={muiTheme.palette.iconColor}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Sign in"
                  onClick={this.props.signIn}/>
        <MenuItem primaryText="Sign up"
                  onClick={this.props.signUp}/>
      </IconMenu>
    );
  }
}

/**
 * When log-in vertical dots menu available
 * for disconnection and profile management
 */
class DotsLogged extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon style={buttonTextStyle} color={muiTheme.palette.iconColor}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Profile"/>
        <MenuItem primaryText="Sign out"
                  onClick={this.props.signOut}/>
      </IconMenu>
    );
  }
}

export default LoginRegister;
export {DotsLogged, DotsNotLogged};