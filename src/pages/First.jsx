import React from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { addtodata, removelbum } from './redux/UserSlice'
import { Link } from 'react-router-dom'

const First = () => {
const dispatch = useDispatch()
function display(){
    axios.get('https://jsonplaceholder.typicode.com/users').then((apidata)=>{
        console.log(apidata.data);
        dispatch(addtodata(apidata.data))
    })
}
const secondData = useSelector((e)=>e.apidatas.ProductDatas)
  console.log('second data',secondData);

  function remove(){
    dispatch(removelbum())

  }

  return (
    <div>
        <button onClick={display}>api fetch</button>
        <Link to={'/Third'}>connect third page</Link>
        <br/>
        <Link to={'/Second'}>connect Second page</Link>
        {secondData?.map((li)=>(
            <>
            <h1>{li.title}</h1>
            </>
        ))}
        <button onClick={remove}>remove</button>
        
    </div>
    
  )
}

export default First