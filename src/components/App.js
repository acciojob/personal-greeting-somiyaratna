import React, {useState} from 'react'

let CounterApp = ()=> {
  let [greet, setGreet] = useState("");
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" onChange ={(e)=> setGreet(e.target.value)}/>
        {greet ? <p>Hello {greet}!</p>: ""}
    </div>
  )
}

export default CounterApp;
