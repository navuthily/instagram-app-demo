import React, { Component } from 'react';
import './Header.style.css'

class SearchInput  extends Component {
  render() {
    return (
            <input  pattern="[a-z]{1,15}" 
            type="search" id="search" placeholder="Search..."  
              onChange={this.props.onChange}      
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
              className={this.props.className} />
    );
  }
}

export default SearchInput ;