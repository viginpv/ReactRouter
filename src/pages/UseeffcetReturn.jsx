import React, { useEffect, useState } from 'react'

const UseeffcetReturn = () => {

    const [state,SetState] = useState(0)
useEffect(()=>{
var i=0
const intervel=setInterval(()=>{
    console.log(i++);
},2000)

return()=>{
    console.log('cleanup function');
    clearInterval(intervel)
}
},[state])


  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>SetState(state+1)}>Click</button>
    </div>
  )
}

export default UseeffcetReturn