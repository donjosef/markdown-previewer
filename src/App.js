import React, { Component } from 'react';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import './App.css';

const marked = require('marked');


class App extends Component {

  state = {
    markdown: '# Im an h1'
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
        <Previewer result={marked(this.state.markdown)}/>
      </div>
    );
  }
}

export default App;
