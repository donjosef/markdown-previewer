import React, { Component } from 'react';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import './App.css';

const marked = require('marked');
const initialMarkdown = '# Im an h1\n\n## Im an h2\n\n[link](www.google.com)\n\nInline code `<div></div>`\n\n```\nMulti line code:\n\n function foo() {}\n```\n\n* item 1\n* item 2\n\n> Block Quotes!\n\nEmbedded images:\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n**Bold Text**';

class App extends Component {

  state = {
    markdown: initialMarkdown
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
