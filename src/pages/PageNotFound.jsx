import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Appcontext } from './UseContext'

const PageNotFound = () => {

const [state,setState] = useState(0)
    const timeout = useNavigate()

    const name = useContext(Appcontext)

    setTimeout(()=>{
        timeout('/')

    }
    ,110000)


    useEffect (()=>{
        var i = 0
        const interval = setInterval(()=>{
            console.log(i++);
        },2000)
        return(()=>{
            clearInterval(interval)
        })
    })

  return (
    <>
    <button onClick={(()=>setState(state+1))}>click</button>
    <h1>{state}</h1>
    <div>PageNotFound 
        {name}
    </div>
    </>
  )
}

export default PageNotFound