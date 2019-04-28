import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div class="ui segment">
        <form class="ui form">
          <div class="field">
            <label>Image Search</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;