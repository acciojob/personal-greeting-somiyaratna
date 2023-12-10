
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [greet, setGreet] = useState("");
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" onChange={(e)=> setGreet(e.target.value)}/>
        <div>Hi {greet}!</div>
    </div>
  )
}

export default App
