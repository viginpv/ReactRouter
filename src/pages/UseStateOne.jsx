import React, { useState } from 'react'


const UseStateOne = () => {
    const [State,SetState] = useState(0)

    const [clr,SetClr] = useState('blue')

    function display(){
        SetState(State+1)
        SetClr("green")
    }
    function display1(){
        SetState(State > 0 ? State-1 : 0)
        SetClr("red")
    }
    function display2(){
        SetState(0)
        SetClr("yellow")
    }

  return (
    <>    <h1 style={{color:clr}}>{State}</h1>
    <div>
        <button onClick={display}>increment</button>
        <button onClick={display1}>decrement</button>
        <button onClick={display2}>reset</button>
    </div>
    </>

  )
}

export default UseStateOne