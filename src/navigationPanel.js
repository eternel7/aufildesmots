import React from 'react';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import AccountCircleIcon from 'material-ui/svg-icons/action/account-circle';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';

export default class NavigationPanel extends React.Component {

  handleClose = () => this.props.handleDisplay(false);

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
            }}><span>Arnold Schwarzenegger</span> <ExpandMoreIcon color={white} style={{verticalAlign: "bottom"}}/></div>
          </div>
          <MenuItem onClick={this.handleClose}>Play</MenuItem>
          <MenuItem onClick={this.handleClose}>Submit</MenuItem>
          <MenuItem onClick={this.handleClose}>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}