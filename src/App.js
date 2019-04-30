import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;