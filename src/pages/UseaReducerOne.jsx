import React, { useReducer } from 'react'


const UseaReducerOne = () => {
    const initialValue = 0
    function display(state,action){
        console.log(action,'action values');

        if (action.name=='vigin'){
            return state = "vigin from thrissur"

        }
        if (action.name=='Viraj'){
            return state = "Viraj from Kochi"

        }

        

    }




    const [state, dispatch] = useReducer(display,initialValue)


  return (
    <div>
   <h1>{state}</h1>
   <button onClick={()=>dispatch({name:'vigin',place:"thrissur"})} >Vigin</button>
   <button onClick={()=>dispatch({name:'Viraj',place:"kochi"})} >Viraj</button>
   </div>
  )    
}

export default UseaReducerOne