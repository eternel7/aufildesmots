import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationPanel from './navigationPanel';
import ExpandableSearch from './components/expandableSearch';
import buttonTextStyle from './const/buttonStyle';
import muiTheme from './theme';


class NavMenu extends Component {
  static muiName = 'IconMenu';

  render() {
    return (
      <IconButton onClick={this.props.myClick}><MenuIcon style={buttonTextStyle}
                                                         color={muiTheme.palette.iconColor}/></IconButton>
    );
  }
}

/**
 * When log-in vertical dots menu available
 * for disconnection and profile management
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


/**
 * The `AppBar` of au fils des mots with navigation-menu on left
 * and search and login on right.
 */
class AppBarMots extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayNavPanel: false,
    };
    // This binding is necessary to make `this` work in the callback
    this.toggleNavigationPanel = this.toggleNavigationPanel.bind(this);
    this.askForSignIn = this.askForSignIn.bind(this);
    this.askForSignUp = this.askForSignUp.bind(this);
    this.askForSignOut = this.askForSignOut.bind(this);
  }


  toggleNavigationPanel = (e) => {
    this.setState({displayNavPanel: !this.state.displayNavPanel});
  };

  askForSignIn = (e) =>{
    console.log("askForSignIn");
    this.props.askForSignIn(e);
  };

  askForSignUp = (e) =>{
    console.log("askForSignUp");
    this.props.askForSignUp(e);
  };

  askForSignOut = (e) => {
    console.log("askForSignOut");
    this.props.signOut(e);
    this.setState({logged: false});
  };

  render() {
    return (
      <div>
        <NavigationPanel showMe={this.state.displayNavPanel} handleDisplay={this.toggleNavigationPanel}/>
        <AppBar
          title="Au fil des mots"
          style={{textAlign: "center"}}
          iconStyleLeft={{width: "40%", textAlign: "left"}}
          iconStyleRight={{width: "40%", textAlign: "right"}}
          iconElementLeft={<NavMenu myClick={this.toggleNavigationPanel}/>}
          iconElementRight={
            (this.props.logged) ?
              <div><ExpandableSearch/> <DotsLogged signOut={this.askForSignOut}/></div> :
              <div><ExpandableSearch/> <DotsNotLogged signIn={this.askForSignIn} signUp={this.askForSignUp}/></div>}
        />
      </div>
    );
  }
}

export default AppBarMots;