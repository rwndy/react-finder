import React, { Component } from 'react';

class SearchBar extends Component {
  //inisialisasi
  state = { term: '' }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"
            //mereset value
            value={this.state.term}
            //mengisi nilai apa saja
            onChange={(e) => this.setState({ term: e.target.value })}/>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;