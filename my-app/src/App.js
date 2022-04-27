
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import Color from './component/Color';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState('light')

const [alert, setAlert] = useState(null);
 const showalert=(message,type) =>
 {
setAlert( {
    msg:message,
    type: type
  })

setTimeout(() => {
  setAlert(null);
}, 2000);
 }

  

  const toggleMode = ()=>
  {
    if(mode==='dark')
    {
      setMode('light')
      document.body.style.background='white';
      showalert("Light Mode has been enebled","success");
      document.title='TextUtils-Light Mode';

      // setInterval(() => {
      //   document.title='You have to Download our latest Mobile app'
      // }, 1500);

   

      
    }
    else if(mode==='light')
     {
      setMode('dark')
      document.body.style.background='#1b4076';
      showalert("Dark Mode has been enebled","success");
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light')
      document.body.style.background='white';
      showalert("Light Mode has been enebled","success");
      document.title='TextUtils-Light Mode';

    }
 
  }
  return (
    <>
<Navbar title="TextUtils" Pricing="cheap" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container">
  <Textform showAlert={showalert} heading="Enter the text to Analyse" mode={mode}/>
</div>
{/* <div><About/></div> */}
<Color/>

</>
  );
}

export default App;
