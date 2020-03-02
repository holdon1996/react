import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const elements = (
      <div className="firstLession">
        <h1>{this.props.header}</h1>
        <h2>{this.props.footer}</h2>
      </div>
    );
    return elements;
  }
}

export default App;
