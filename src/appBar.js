import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationPanel from './navigationPanel';
import ExpandableSearch from './components/expandableSearch';
import buttonTextStyle from './const/buttonStyle';
import muiTheme from './theme';
import {DotsLogged, DotsNotLogged} from './components/loginRegister';
import {withRouter} from "react-router-dom";


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
    this.props.history.push('/login');
  };

  askForSignUp = (e) =>{
    console.log("askForSignUp");
    this.props.history.push('/register');
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

export default withRouter(AppBarMots);