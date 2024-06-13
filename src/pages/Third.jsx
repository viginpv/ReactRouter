import React from 'react'
import {useSelector} from "react-redux"

const Third = () => {

const datas= useSelector((state)=>state.apidatas.datas)
console.log('datas',datas);



  return (
    <div>
        {datas?.map((li)=>(


            <>
            <h1>{li.name}</h1>
            <h5>{li.username}</h5>
            <h5>{li.email}</h5>
            </>
            
        ))}
    </div>

  )
}

export default Third