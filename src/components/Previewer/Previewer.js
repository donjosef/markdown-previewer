import React from 'react';

function Previewer(props) {
    const { result } = props;
  return (
    <section  className="preview-wrapper">
     <h2 className="preview-title">Preview</h2>
      <div id="preview" className="preview" dangerouslySetInnerHTML={{__html: result}} >
      </div>
    </section>
  )
}

export default Previewer;
