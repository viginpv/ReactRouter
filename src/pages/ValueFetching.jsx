import React, { useState } from 'react'

const ValueFetching = () => {

const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [address, setAddress] = useState('')
const [mobile, setMobile] = useState(Number)

function display(){
    console.log(name,email,password,address,mobile);
}

  return (
    <div>
        <input type="text" placeholder='username' onChange={(event)=>setName(event.target.value)} />
        <input type="email" placeholder='Email' onChange={(event)=>setEmail(event.target.value)} />
        <input type="password" placeholder='Password' onChange={(event)=>setPassword(event.target.value)} />
        <input type="text" placeholder='Address' onChange={(event)=>setAddress(event.target.value)} />
        <input type="number" placeholder='Mobile' onChange={(event)=>setMobile(event.target.value)} />
        <button onClick={display}>click</button>
    </div>
  )
}

export default ValueFetching