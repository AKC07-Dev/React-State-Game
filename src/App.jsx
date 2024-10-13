import React from 'react'
import {useState, useEffect} from 'react';
import './app.css'

const App = () => {
  //initial states
  const [seconds, setSeconds] = useState(0);
  const [secondsleft, setSecondsLeft] = useState(0);
  const [isrunning, setIsRunning] = useState(false);
  const [name, setname] = useState('')
  

  //on change events
  const handleSecondsChange = (event) => {
    setSeconds(Number(event.target.value));
  };

  const handleStarttimer = () => {
    setSecondsLeft(seconds);
    setIsRunning(true);
  };

  const handlenamechange = (event) => {
    setname(event.target.value);
  };


  //working of timer
  useEffect(() => {
    //condition
     {
      const intervalId = setInterval(() => {
        if (isrunning && secondsleft > 0){
        setSecondsLeft(secondsleft - 1);
        }
        else{
          clearInterval(intervalId);
          setname('')
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [isrunning, secondsleft]);



//main code
  return (
    <div>
    <div className='align items-center content-center text-center bg-gradient-to-r from-pink-600 to-pink-300 h-screen ' >
     <h1 className='text-5xl italic font-semibold text-rose-950'>REACT STATE GAME</h1>
      <br />
      <hr />
     <label className='font-bold text-rose-950 text-2xl h-14 p-5 '> Enter Name: <input className='bg-pink-200 h-9 align-middle border-black border-2 p-6 m-10' type="text" value={name} onChange={handlenamechange}/></label> 
     <br />
     <br />
     <hr />
      <label className='font-bold text-rose-950 text-2xl h-14 p-5 '>Enter Duration(in seconds): <input className='bg-pink-200 h-9 align-middle border-black border-2 p-6 m-8' value={seconds} type='number' onChange={handleSecondsChange}/></label>
      <br />
      <br />
      <hr />
      <button className=' border-black border-4 bg-black rounded-lg text-center w-20 h-11 mt-6 text-white text-lg font-bold hover:bg-pink-300 hover:text-black' type='submit' onClick={handleStarttimer}>Submit</button>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <h1 className='font-bold text-4xl font-serif text-rose-950'>Name: {name} </h1>
      <br />
      <h1 className='font-bold text-4xl font-serif text-rose-950'> Duration: {secondsleft}</h1>
      <br />
      <br />

    </div>
    </div>
  )
}

export default App
