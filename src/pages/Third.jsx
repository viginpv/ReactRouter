import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { removelbum } from './redux/UserSlice';

const Third = () => {

const datas= useSelector((state)=>state.apidatas.datas)
console.log('datas',datas);

const dispatch = useDispatch()

function removedata(){
  dispatch(removelbum())
  
}



  return (
    <div>
        {datas?.map((li)=>(


            <>
            <h1>{li.name}</h1>
            <h5>{li.username}</h5>
            <h5>{li.email}</h5>
            </>
            
        ))}
        <button onClick={removedata}>remover datas</button>
    </div>

  )
}

export default Third