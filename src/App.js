import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [ mode, setMode ] = useState('light');
  const [ btntext, MyBtnText ] = useState("Enable Dark Mode")
  const [ alert, setAlert ] = useState(null);

  const showalert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const togglemode = () =>{
    if(mode === 'light'){

      setMode('dark');
      MyBtnText('Enable Light Mode');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been enabled","success");

    }
    else{

      setMode('light')
      MyBtnText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white'
      showalert("Light mode has been enabled","success");

    }
  }
  
  const greenmode = () =>{

      setMode('dark');
      document.body.style.backgroundColor = '#013220';
      showalert("Green mode has been enabled","success");
  }
  
  const greymode = () =>{

    setMode('light');
    document.body.style.backgroundColor = '#A9A9A9';
    showalert("Grey mode has been enabled","success");
  }

  const redmode = () =>{

    setMode('dark');
    document.body.style.backgroundColor = '#8b0000';
    showalert("Red mode has been enabled","success");
  }

  return (
  <>

  <BrowserRouter>
  <Navbar title = 'Text Utils' homeText = 'Home' aboutText = 'About Us' mode = {mode} togglemode = {togglemode} btntext = {btntext} greenmode = {greenmode} greymode = {greymode} redmode = {redmode} />  
  <Alert alert = {alert}/>
  <div className="container my-3">
    <Routes>
      <Route exact path='/TextUtils' element = {<TextForm heading = 'Enter the text to analyse below' mode = {mode} showalert = {showalert}/>}></Route>
      <Route exact path='/About' element = {<About mode = {mode} greenmode = {greenmode} greymode = {greymode} redmode = {redmode}/>}></Route>
    </Routes> 
  </div>
  </BrowserRouter>

  </>
  );
}

export default App;
