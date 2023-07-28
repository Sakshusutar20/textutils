import React, { useState } from 'react';



export default function Textform(props) {

  // const[btnbg,setBtnbg] =useState('primary');
  

  // const btntoggle = () =>{
  //   if(btnbg === 'primary'){
  //     setBtnbg('white');
  //   }
  //   else{
  //     setBtnbg('primary')
  //   }
  // }


     const btnstyle = {
      width : '200px',
      fontSize :'18px'
     
    
     
    };

   


    const handleUpClick = () => {
        console.log("uppercase to convert");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
     }

      const handleLowClick = (event) => {
       let oldText = text.toLowerCase();
        setText(oldText);
    }

    const handleClearClick = () =>{
      let newText = ' ';
      setText(newText);
    }

    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

     const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "));
    }

    const capitalFirstLetter = () => {
        let tempText = text.split(/[  ]+/);
        let newText="";
        tempText.forEach((e)=>{
            e=e.charAt(0).toUpperCase()+e.slice(1);
            newText=newText+e+" ";
        })
        setText(newText);

    }



    const [text, setText] = useState('');

    // text= "new text"; // Wrong way to change the state
    // setText("new text"); // correct way to change the state

  return (
    <>
        <div className='containermt-5'>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control shadow p-4 mb-5 rounded border" onChange={handleOnChange} value = {text} rows="10" id='myBox'></textarea>

   <div className=" container mt-4 d-flex row  justify-content-center  ">
   
    <button className= "btn btn-primary shadow rounded btn-sm ms-1 mb-2  mt-2" onClick={handleUpClick} style={btnstyle} >Convert To Uppercase</button>
  <button className="btn btn-primary shadow rounded  btn-sm ms-1 mb-2   mt-2" onClick={handleLowClick}  style={btnstyle}>Convert To Lowercase</button>
    <button className="btn btn-primary shadow rounded mb-2   btn-sm ms-1  mt-2" onClick={capitalFirstLetter}  style={btnstyle}>Capital First Letter</button>
    
   
     <button className="btn btn-primary shadow rounded  mb-2  btn-sm ms-1  mt-2 " onClick={handleClearClick}  style={btnstyle}>Clear Text</button>
     <button className="btn btn-primary shadow rounded  mb-2  btn-sm ms-1   mt-2" onClick={handleCopy}  style={btnstyle}>Copy Text</button>
  <button className="btn btn-primary shadow rounded  mb-2   btn-sm ms-1  mt-2" onClick={handleExtraSpace}  style={btnstyle}>Remove Extra space</button>
   
  

  
 </div>
  

  
   <div className="conatiner  mt-2">
     <h1>Your text summary</h1>
     <p>{text.split  (" ").length} words and {text.length} characters</p>
     <p>{0.008 * text.split("").length} minutes read</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here!!"}</p>
   </div>
</div>

 


      
    </div>
    </>
    

    
  )
}
