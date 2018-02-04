import React from 'react';
import {withRouter} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';


class NavigationPanel extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleClose = this.handleClose.bind(this);
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleClose = (e, path) => {
    console.log(path, this.props, '/'+path);
    if(path!==undefined){
      this.props.history.push('/'+path);
    }
    this.props.handleDisplay(false);
  };

  handleRequest = (open) => {
    this.props.handleDisplay(open);
  };

  render() {
    return (
      <div>
        <Drawer ref="navigationPanel"
                open={this.props.showMe}
                onRequestChange={this.props.handleDisplay}
                docked={false}>
          <div style={{
            padding: "24px",
            backgroundColor: "#616161",
            width: "calc(100% - 48px)",
            color: "#fff",
          }}>
            <Avatar size={56} icon={<AccountCircleIcon/>}/>
            <div style={{
              display: "block",
              paddingTop: "12px",
              lineHeight: "24px",
            }}><span>Arnold Schwarzenegger</span> <ExpandMoreIcon color={white} style={{verticalAlign: "bottom"}}/>
            </div>
          </div>
          <MenuItem onClick={(e) => this.handleClose(e,'home')}>Home</MenuItem>
          <MenuItem onClick={(e) => this.handleClose(e,'play')}>Play</MenuItem>
          <MenuItem onClick={(e) => this.handleClose(e,'submit')}>Submit new words</MenuItem>
          <MenuItem onClick={(e) => this.handleClose(e,'about')}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}
export default withRouter(NavigationPanel);