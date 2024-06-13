import React, { useState } from 'react'

const ValueFetchingTwo = () => {
    const [data , setData] = useState({
        'username':'',
        'Email':'',
        'Password':'',
        'Address':'',
        'Mobile':Number

    })




    function HandleChange(e){
        const {name,value}=e.target
        setData({...data,
            [name]:value
        })
        
    }
    function display(){
        console.log(data);

    }

  return (
    <div>
    <input type="text" placeholder='username' name='username' onChange={HandleChange} />
    <input type="email" placeholder='Email' name='Email' onChange={HandleChange} />
    <input type="password" placeholder='Password' name='Password' onChange={HandleChange} />
    <input type="text" placeholder='Address' name='Address' onChange={HandleChange} />
    <input type="number" placeholder='Mobile'  name='Mobile' onChange={HandleChange} />
    <button onClick={display}>click</button>
</div>
  )
}

export default ValueFetchingTwo