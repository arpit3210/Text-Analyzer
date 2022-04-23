import React, {useState} from 'react'

export default function Textform(props) {


    const handleUpClick=()=>
    {
        // console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase();
          setText(newText)
    }
    const handleLoClick=()=>
    {
        // console.log("Uppercase was clicked" + text);
        let newText =text.toLocaleLowerCase();
          setText(newText)
    }
    const handleOnChange=(event)=>
    {
        // console.log("Handle don change");
    
        setText(event.target.value);
    }
    const handleClear=()=>
    {
        // console.log("Handle don change");
    let newText=('');
        setText(newText);
    }

    const handleCopy=()=>
    {
      var text =document.getElementById("exampleFormControlTextarea1");
      // text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraspaces=()=>
    {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const [text, setText] = useState('');
  
  return (

<div style={{color:props.mode==='light'?'black':'white'}}>
<div className="mb-3">

<h1>{props.heading}</h1>

  <textarea className="form-control" value={text} onChange={handleOnChange}   style={{backgroundColor: props.mode==='light'? 'white':'grey',color:props.mode==='light'?'black':'white'}}id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
  <div className="col-auto">
    <button type="submit" onClick={handleLoClick} className="btn btn-primary mb-3">Change into LowerCase</button>
    <button type="submit" onClick={handleUpClick} className="btn btn-primary mb-3">Change into UpperCase</button>
    <button type="submit" onClick={handleClear} className="btn btn-primary mb-3">Clear Text</button>
    <button type="submit" onClick={handleCopy} className="btn btn-primary mb-3">Copy Text</button>
    <button type="submit" onClick={handleExtraspaces} className="btn btn-primary mb-3">Clear Extra Spaces</button>
  </div>
<h2><b>No of Characters is: {text.length}</b>  No of Words: {text.split(" ").length-1}</h2>
<b>How much time it will take to read:  ({0.008*(text.split(" ").length-1)}) Minuts</b>
<center><h1>Preview</h1></center>
<p>{text.length>0 ? text:'Type Above something to preview here'}</p>

</div>

  )
}
