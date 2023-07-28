import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom' ;




function App(props) {
    
   const[alert, setAlert] = useState(null);

   const show = (message,type) =>{
        setAlert({
          msg : message,
          type :type
        });
   }

  
  

    const[mode , setMode]  = useState({
    color : 'white',
    backgroundColor : '#212529',
    padding : '14px' });

  const toggleMode = () =>{
    if(mode.color === 'white'){
     setMode({
            color : '#212529',
            backgroundColor : 'white',
          })
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'white';
         show("Dark mode has been enabled" , "Success");
          
      }
    else{
      setMode({
            color : 'white',
    backgroundColor : '#212529',
    
   
        });
        document.body.style.backgroundColor = '#212529';
         document.body.style.border =' 1px solid white';
         show("light mode has been enabled" , "Success");
    }
  }

  return (
    <>




     <Navbar className="container-fuild " title="TextUtils"  toggleMode={toggleMode} aboutText="About"   /> 
     
     
     
     


     
      <div className="container" >

      <Textform heading='Enter the text to analyze below' mode='mode'/>

      </div> 
         
     
     
    </>
  );
}

export default App;

   
 