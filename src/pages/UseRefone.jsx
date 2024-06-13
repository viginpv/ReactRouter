import React, { useEffect, useRef } from 'react'

const UseRefone = () => {

const a=useRef()
const b = useRef()
useEffect(()=>{
    b.current.focus()

},[])
function display (){

    console.log('hello');
    a.current.style.backgroundColor='red'
    a.current.style.height='300px'
    a.current.style.width='500px'

}


 

  return (
    <>
    <div ref={a} style={{height:"200px",width:'300px',backgroundColor:'blue'}}></div>
    <button onClick={display}>clickme</button>
    <input  type="text" placeholder='name' />
    <input ref={b} type="text" placeholder='username' />
    <input type="text" placeholder='password' />
    </>
    
  )
}

export default UseRefone