import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const states = useParams()
    console.log("states",states.id);
    const [State,SetState] = useState([])

    async function details(){
         const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
        console.log(data.data.categories);
        SetState(data.data.categories)
       }

    useEffect(()=>{
    details()
    },[])
   const FilteredData = State.filter((li)=>{
return li.idCategory == states.id

    })
    console.log(FilteredData);

  return (
    <div>
        {FilteredData.map((li)=>(
            <>
          <h1>  {li.strCategory} </h1>
            <img src={li.strCategoryThumb} alt="" />
            <p>{li. strCategoryDescription}</p>
            </>
        ))}
    </div>
  )
}

export default ProductDetails