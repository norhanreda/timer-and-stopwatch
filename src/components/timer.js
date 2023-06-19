import React, { useEffect, useState } from 'react'
import './timer.css'
const Timer=() =>{
  const [seconds,setseconds]=useState(0);
  const [minutes,setminutes]=useState(0);
  const [hours,sethours]=useState(0);
  const [timeron,settimeron]=useState(false);
  var timer ;
 useEffect (()=>{
  if(timeron)
  {
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
  }
  else 
  {
    clearInterval(timer);
  }
    return ()=>clearInterval(timer);

  });
  const reset=()=> {
 sethours(0);
 setminutes(0);
 setseconds(0);
  }
  const start=()=> {
    clearInterval(timer);
  }
  const resume=()=> {
    sethours(hours);
 setminutes(minutes);
 setseconds(seconds);
  }
  return (
    <>
    <div className='top'> 
    <div className='all'>

    <div className='box'>
     <h1>Timer</h1>
     <h1> {hours}:{minutes}:{seconds} </h1>
     <button className='stop' onClick={reset}>Reset</button>

     <button className='start' onClick={()=>settimeron(true)}>Start</button>
     <button className='resume' onClick={()=>settimeron(false)}>Pause</button>

    </div> 
    </div> 
    </div>
    </>
  );
}

export default Timer;
