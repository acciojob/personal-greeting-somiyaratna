import React, {useState} from 'react'

let App = ()=> {
  let [greet, setGreet] = useState("");
  return (
    <div>
        <p>Enter your name:</p>
        <input type="text" onKeyUp ={(e)=> setGreet(`Hello ${e.target.value}!`)}/>
        <p>{greet}</p>
    </div>
  )
}

export default App;
