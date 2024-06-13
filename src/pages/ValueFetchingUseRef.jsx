import React, { useRef } from 'react'
import UseRefone from './UseRefone'

const ValueFetchingUseRef = () => {

        const name = useRef()
        const email = useRef()
        const password = useRef()
        const address = useRef()
        const number = useRef()

        function display(){
            const username = name.current.value
            console.log(username)
            const mail = email.current.value
            console.log(mail)
            const pass = password.current.value
            console.log(pass)
            const ads = address.current.value
            console.log(ads)
            const phone = number.current.value
            console.log(phone)
        }

  return (
    <div>
    <input ref={name} type="text" placeholder='username'  />
    <input ref={email} type="email" placeholder='Email'  />
    <input ref={password} type="password" placeholder='Password'  />
    <input ref={address} type="text" placeholder='Address'  />
    <input ref={number} type="number" placeholder='Mobile' />
    <button onClick={display}>click</button>
</div>
  )
}

export default ValueFetchingUseRef