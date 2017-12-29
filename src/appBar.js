import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationPanel from './navigationPanel';
import {white} from 'material-ui/styles/colors';

const buttonTextStyle = {
  color: white,
  fontWeight: 400
};

class NavMenu extends Component{
  static muiName = 'IconMenu';
  render() {
    return (
      <IconButton onClick={this.props.myClick}><MenuIcon style={buttonTextStyle} color={white} /></IconButton>
    );
  }
}

/**
 * When not log login button is available
 */
class LoginRegister extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <FlatButton label="Login"
                    labelStyle={buttonTextStyle}
                    onClick={this.props.myClick}
        />
        <FlatButton label="Register"
                    labelStyle={buttonTextStyle}
                    onClick={this.props.myClick}
        />
      </div>
    );
  }
}

/**
 * When log-in vertical dots menu available
 * for disconnection and profile management
 */
class Logged extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon style={buttonTextStyle} color={white} /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Profile"/>
        <MenuItem primaryText="Sign out"
                  onClick={this.props.myClick}/>
      </IconMenu>
    );
  }
}


/**
 * The `AppBar` of au fils des mots with navigation-menu on left
 * and search and login on right.
 */
class AppBarMots extends Component {
  state = {
    logged: false,
    displayNavPanel: false,
  };

  toggleNavigationPanel = (event) => {
    this.setState({displayNavPanel: !this.state.displayNavPanel});
  };

  handleChange = (event) => {
    this.setState({logged: !this.state.logged});
  };

  render() {
    return (
      <div>
        <NavigationPanel showMe={this.state.displayNavPanel} handleDisplay={this.toggleNavigationPanel} />
        <AppBar
          title="Au fil des mots"
          style={{textAlign: "center"}}
          iconStyleLeft={{width: "30%", textAlign: "left"}}
          iconStyleRight={{width: "30%", textAlign: "right"}}
          iconElementLeft={<NavMenu myClick={this.toggleNavigationPanel} />}
          iconElementRight={this.state.logged ? <Logged myClick={this.handleChange}/> :
          <LoginRegister myClick={this.handleChange}/>}
        />
      </div>
    );
  }
}

export default AppBarMots;