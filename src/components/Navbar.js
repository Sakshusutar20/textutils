import { useState } from 'react';

import PropTypes from 'prop-types';
import {BrowserRouter as Link } from 'react-router-dom' ;
export default function Navbar(props) {



     

    const[mode , setMode]  = useState({
    color : 'white',
    color : 'pink',
    color : 'black',
    padding : '14px' });

  const toggleMode = () =>{
    if(mode.color === 'white'){
     setMode({
            color : '#212529',
            backgroundColor : 'white',
            
          })
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
          
      }
    else{
      setMode({
            color : 'white',
    backgroundColor : '#212529',
    
   
        });
        document.body.style.backgroundColor = '#212529';
         document.body.style.color = 'white';

    }
  }

  const toggleMode2 = () =>{
    if(mode.color === 'pink'){
     setMode({
            color : 'black',
            backgroundColor : 'white',
            
          })
          document.body.style.color = 'black';
          document.body.style.backgroundColor = 'white';
          
      }
    else{
      setMode({
            color : 'pink',
    backgroundColor : '#092b4d',
    
   
        });
        document.body.style.backgroundColor = '#092b4d';
         document.body.style.color = 'pink';

    }
  }

  // const toggleMode3 = () =>{
  //   if(mode.color === 'LavenderBlush'){
  //    setMode({
  //           color : 'black',
  //           backgroundColor : 'white',
            
  //         })
  //         document.body.style.color = 'black';
  //         document.body.style.backgroundColor = 'white';
          
  //     }
  //   else{
  //     setMode({
  //           color : 'LavenderBlush',
  //   backgroundColor : 'DeepPink',
    
   
  //       });
  //       document.body.style.backgroundColor = 'DeepPink';
  //        document.body.style.color = 'LavenderBlush';

  //   }
  // }

      
  

  return (

    <>

    

 <nav className="navbar navbar-expand-lg" style={mode}>
   <div className="container-fluid shadow p-3 mb-5 rounded">
<strong><a className="navbar-brand text-primary " style={mode} href="#" >{props.title}</a></strong>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" style={mode} aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">         <li className="nav-item">
          <strong> <a className="nav-link active" style={mode} aria-current="page" href="#">Home</a></strong>
        </li>
        {/* <li className="nav-item">
          <strong><a className="nav-link" style={mode} href="/">{props.aboutText}</a> </strong>
        </li> */}
       
</ul>

  {/* <div className="form-check form-switch mx-2">
  <input className="form-check-input " type="checkbox" onClick={toggleMode3} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enabled green mode</label>
  </div> */}

  <div className="form-check form-switch mx-2">
  <input className="form-check-input " type="checkbox" onClick={toggleMode2} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Enabled dark-blue mode</label>
  </div>

     <div className="form-check form-switch mx-2">
  <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
 </div>
     
  </div>
   </div>
    </nav>

  </>

  )
}

 Navbar.propTypes = 
 {title : PropTypes.string,
 abouttext : PropTypes.string,
 }


// Navbar.defaultProps =
// {
//   title : "set title here",
//   abouttext : " about text",
// }