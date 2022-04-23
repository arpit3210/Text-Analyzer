
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light')


  const toggleMode = ()=>
  {
    if(mode==='dark')
    {
      setMode('light')
      document.body.style.background='#1b4076';
    }
 
    else if(mode==='light')
     {
      setMode('dark')
      document.body.style.background='#1b4076';
    }
    else{
      setMode('light')
      document.body.style.background='light';

    }
 
  }
  return (
    <>
<Navbar title="TextUtils" Pricing="cheap" mode={mode} toggleMode={toggleMode} />
<div className="container">
  <Textform heading="Enter the text to Analyse" mode={mode}/>
</div>
{/* <div><About/></div> */}
</>
  );
}

export default App;
