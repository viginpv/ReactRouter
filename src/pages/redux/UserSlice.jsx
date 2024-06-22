import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'apidatas',
    initialState:{
        datas:null,
        ProductDatas:null
    },
    reducers:{
        addtodata:(state,action)=>{
            console.log('action values', action);
            state.datas=action.payload
    
        },
        addtoalbum:(state,action)=>{
            console.log("action values in albu",action);
            state.ProductDatas=action.payload
        },
        removelbum:(state,action)=>{
            state.datas=null
        }
    }
})

export const {addtodata,addtoalbum,removelbum}=slice.actions
export default slice.reducer
