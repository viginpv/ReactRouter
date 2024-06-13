import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import { Link } from 'react-router-dom'


const Home = () => {

  const [State,SetState] = useState([])
  const [State1,setState1] = useState(0)



  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((ApiData)=>{
      console.log("apidata", ApiData.data.categories);
      SetState(ApiData.data.categories)
    }

  )
    
  },[])


  console.log("++++++++++ ",State);

  return (
    <>
        <div className="home">
       

        {State.map((li)=>(
        <Link to={`/details/${li.
          idCategory}`}> 
        <div>
          
          <img src={li.strCategoryThumb} alt="" />
          <h3>{li.strCategory}</h3>

          </div>
          </Link>
          
        ))}
        </div>


     </>
  )
}

export default Home