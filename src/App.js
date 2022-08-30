import './App.css';
import React from 'react'
import {marked} from 'marked'

function App() {
  marked.setOptions({
    breaks:true,
    renderer: new marked.Renderer()
  })
  const defaultContent=`
  # a header (H1 size)
  ## a sub header (H2 size)
  a link [github Link](https://github.com/PauloVBS)
  \`inline code \`
  \`\`\`
  function HelloWorld(){
  console.log("Hello World!");
  }
  \`\`\`
  * a list item
  > a blockquote

  an image 
  ![Vs Code logo](https://code.visualstudio.com/assets/images/code-stable.png)
  **and bolded text.**
  `
  const [content, setContent] = React.useState({
    preview:  defaultContent,
    editorContent:""
  });
  

  function handleChangeEditor(event){
    setContent({...content,preview: event.target.value})
  }
  return (
    <div className="App">
      <div id="editor-window"><Header title="Editor"/><textarea id="editor" onChange={handleChangeEditor} type="text" value={content.preview} />
      </div>
      <Parser text={content.preview}/>
    </div>
  );
}
function Parser(props){
  return (<div id="previewer"><Header title="Preview"/><div dangerouslySetInnerHTML={{__html: marked.parse(props.text)}} id ="preview" >
  </div></div>)
};
function Header(props){
  return (<header id='headerer'>{props.title}</header>)
}

export default App;
