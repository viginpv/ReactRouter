import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoalbum } from './redux/UserSlice';

const Second = () => {
    const dispatch=useDispatch()
function display(){
    axios.get('https://jsonplaceholder.typicode.com/albums').then((apidata)=>{
        console.log(apidata.data);
dispatch(addtoalbum(apidata.data))
    })
}
    
  return (
    <div>
        <button onClick={display}>api fetching</button>
        <Link to={'/First'}>first page</Link>
    </div>
  )
}

export default Second