import React, { useEffect, useState } from 'react'

 const UseEffectone = () => {
    const [State,SetState] = useState(0)
    const [State1,SetState1] = useState(0)
    // sideeffect management

    useEffect(function(){
        console.log('hello');
    },[State])

    function display(){
        SetState(State+1)
    }

  return (
    <div>
        <h1>{State}</h1>
        <h1>{State1}</h1>
        <button onClick={display}>increment</button>
        <button onClick={()=>{SetState1(State1+1)}}>increment1</button>
    </div>
  )
}
export default UseEffectone
