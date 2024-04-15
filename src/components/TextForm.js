import React,{useState} from 'react'

export default function TextForm(props) {

  const handleupclick = () =>{
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Text has been converted to uppercase","success");
  }

  const handleloclick = () =>{
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Text has been converted to lowercase","success");
  }

  const handleclearclick = () =>{
    let newtext = ('');
    settext(newtext);
    props.showalert("Text has been cleared","success");
  }

  const handlecopyclick = () =>{
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard","success");
  }

  
  const handlespeakclick = () =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleonchange = (event) => {
    settext(event.target.value)
  }

  const [ text, settext ] = useState("");

  return (
    <>
    <div className='container my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea style={{backgroundColor : props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} className="form-control" value={text} placeholder='Enter Text' onChange={handleonchange} id="Box" rows="8"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleupclick}>Move to upper case</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleloclick}>Move to lower case</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleclearclick}>Click to clear text</button>
        <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handlecopyclick}>Click to copy text</button>
        <button disabled = {text.length === 0} className="btn btn-success mx-2 my-1" onClick={handlespeakclick}>Click to speak</button>
    </div>
    <div className="conatiner" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{ 0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!!'}</p>
    </div>
    </>
  )
}
