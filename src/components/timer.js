import React, { useEffect, useState } from 'react'
import './timer.css'
const Timer=() =>{
  const [seconds,setseconds]=useState(0);
  const [minutes,setminutes]=useState(0);
  const [hours,sethours]=useState(0);
  var timer ;
 useEffect (()=>{
    timer = setInterval(()=>{
      setseconds(seconds+1);
      if(seconds===59)
      {
       setminutes(minutes+1);
       setseconds(0);
      }
      if(minutes===59)
      {
        sethours(hours+1);
        setminutes(0);
        setseconds(0);

      }

    },1000)

    return ()=>clearInterval(timer);

  });
  return (
    <>
 
    <div className='all'>

    <div className='box'>
     <h1>Timer</h1>
     <h1> {hours}:{minutes}:{seconds} </h1>
     <button className='stop'>
      Start
     </button>

     <button className='start'>Reset</button>

    </div> 
    </div> 
  
    </>
  );
}

export default Timer;
