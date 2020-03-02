import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      header: "Header",
      footer: "Footer"
    }
  }

  render() {
    const elements = (
      <div className="firstLession">
        <h1>{this.state.header}</h1>
        <h2>{this.state.footer}</h2>
      </div>
    );
    return elements;
  }
}

export default App;
