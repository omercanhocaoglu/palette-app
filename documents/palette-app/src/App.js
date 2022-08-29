import React from 'react';

import "./App.css"

import { useState, useEffect } from 'react';










function App() {
  
const colors = [

    "#BFCE33",
    "#E90B0B",
    "#0B17E9",
    "#FFFFFF",
    "#B716C6",
    "#16BAC6",
    "#EA66B2",
    "#666FEA",
    "#000000",
    "#20CC15",

];  

const [colorSet, setColorSet] = useState("Click a ColorBox for color code!");

const ColorMessage = "Color code is:";

// there will be a clock function below
const [Clock, setClock] = useState();

const date = new Date().toDateString();

useEffect( () => {
    setInterval( () => {
        const time = new Date().toLocaleTimeString();

        setClock(time);
    },1000 )
});
  
    return (
    
    
    <div className='App' style={{background: colorSet, color: colorSet === "#000000" ? "white" : "#000000"}}>
        
        <h1>
          
          Welcome to Color Palette! <br/> <br/> 
          
            { `${ColorMessage} ${colorSet}   ` }
        
        </h1>

        

        <div className='container'>
          
            {
                colors.map( (color, index) => 
                    <div key={index}  className='card'> 

                        <div style={{background:color, filter:"brightness(55%)", color: color === "#000000" ? "white" : ""}} 
                        className='box' onClick={ () => setColorSet(color) }> 
                             
                             
                       
                        </div>
                        
                    </div>
                 )
            } <br/>
        
        
        
        </div>
   
     <div className='clock'>    {/* clock function */}
        
           {Clock} <br/>

           {date}
    
    </div>   {/* clock function*/}
    
    </div>
  )
}

export default App;













