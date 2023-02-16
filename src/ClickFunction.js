import React, { useState } from 'react'

function ClickFunction() {
      const [name, setName] = useState("Ali")
      let changeState =() => {
        setName("Zain")
      }
    
  return (
    <div>
        <h1>{name}</h1>
        <input type="button" value="Click" onClick={changeState} />
    </div>
  )
  }

export default ClickFunction