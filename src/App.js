import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="ui segment" style={{marginTop: 20}}>
        <SearchBar />
      </div>
    );
  }
}

export default App;