import React from 'react'

function Editor(props) {
  const { markdown, onChangeText } = props;
  return (
    <section className="editor-wrapper">
      <h2 className="editor-title">Editor</h2>
      <form>
        <textarea 
            id="editor" 
            className="editor"
            onChange={onChangeText}
            value={markdown}>editor</textarea>
      </form>
    </section>
    
  )
}

export default Editor;
