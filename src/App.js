import React, { Component } from 'react';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }
}

export default App;
