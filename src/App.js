import React, { Component } from 'react';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import './App.css';

class App extends Component {

  state = {
    markdown: ''
  }

  changeTextHandler = (e) => {
    this.setState({
      markdown: e.target.value
    });
  }
  render() {
    return (
      <div className="App">
        <Editor markdown={this.state.markdown} onChangeText={this.changeTextHandler}/>
        <Previewer />
      </div>
    );
  }
}

export default App;
