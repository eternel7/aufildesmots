import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './../theme';
import JSONP from 'jsonp';

const googleAutoSuggestURL = `//suggestqueries.google.com/complete/search?client=youtube&hl=fr&q=`;

class ExpandableSearch extends Component {
  static muiName = 'IconButton';

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      inputValue: '',
      active: false,
      dataSource: []
    }
  }

  onUpdateInput = (inputValue) => {
    const self = this;
    this.setState({
      inputValue: inputValue
    }, function () {
      self.performSearch();
    });
  };

  performSearch = () => {
    const
      self = this,
      url = googleAutoSuggestURL + this.state.inputValue;
    if (this.state.inputValue !== '') {
      JSONP(url, function (error, data) {
        let searchResults, retrievedSearchTerms;

        if (error) return error;

        searchResults = data[1];
        retrievedSearchTerms = searchResults.map(function (result) {
          return result[0];
        });
        self.setState({
          dataSource: retrievedSearchTerms
        });
      });
    }
  };

  toggleSearchActive = (e) => {
    this.setState({active: !this.state.active});
  };

  handleFocus() {
    this.setState({focus: true})
  }

  handleBlur = () => {
    this.setState({focus: false});
    if (this.state.inputValue.trim().length === 0) {
      this.setState({inputValue: ''});
    }
  };

  handleCancel = () => {
    this.setState({active: false, inputValue: ''});
  };

  handleKeyPressed = (event) => {
    if (event.charCode === 13) {
      this.performSearch();
    }
  };

  render() {
    let styles = {
      textFieldStyle: {
        color: muiTheme.palette.alternateTextColor
      },
      underlineStyle: {
        borderColor: muiTheme.palette.accent3Color
      },
      underlineFocusStyle:{
        borderColor: muiTheme.palette.alternateTextColor,
        borderBottomWidth: '1px'
      }
    };

    const searchInactive = (
      <MuiThemeProvider muiTheme={muiTheme}>
        <IconButton onClick={this.toggleSearchActive}>
          <SearchIcon color={muiTheme.palette.iconColor}/>
        </IconButton>
      </MuiThemeProvider>
    );

    const searchActive = (
      <MuiThemeProvider muiTheme={muiTheme}>
        <span>
          <IconButton onClick={this.toggleSearchActive}>
            <SearchIcon color={muiTheme.palette.iconColor}/>
          </IconButton>
          <AutoComplete
            inputStyle={styles.textFieldStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            dataSource={this.state.dataSource}
            hintText="Search"
            onBlur={() => this.handleBlur()}
            searchText={this.state.inputValue}
            onUpdateInput={(e) => this.onUpdateInput(e)}
            onKeyPress={(e) => this.handleKeyPressed(e)}
            onFocus={() => this.handleFocus()}
            underlineShow={true}
            autoFocus
            maxSearchResults={5}
            filter={AutoComplete.caseInsensitiveFilter}
          />
          <IconButton onClick={this.handleCancel}>
            <CloseIcon color={muiTheme.palette.iconColor}/>
          </IconButton>
        </span>
      </MuiThemeProvider>
    );

    return ((this.state.active === true) ? searchActive : searchInactive);
  }
}

export default ExpandableSearch;