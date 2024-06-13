import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route,} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import UseStateOne from './pages/UseStateOne'
import UseEffectone from './pages/UseEffectone'
import BoxColour from './pages/BoxColour'
import ProductDetails from './pages/ProductDetails'
import PageNotFound from './pages/PageNotFound'
import UseRefone from './pages/UseRefone'
import ValueFetching from './pages/ValueFetching'
import ValueFetchingTwo from './pages/ValueFetchingTwo'
import ValueFetchingUseRef from './pages/ValueFetchingUseRef'
import StyledComponents from './pages/StyledComponents'
import Facebookclone from './pages/Facebookclone'
import Facebook from './pages/Facebook'
import { Appcontext } from './pages/UseContext'
import UseReducer from './pages/UseReducer'
import UseeffcetReturn from './pages/UseeffcetReturn'
import UseaReducerOne from './pages/UseaReducerOne'
import First from './pages/First'
import Third from './pages/Third'
import Second from './pages/Second'



function App() {
  const a='ahhakadj'
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/details/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Route>
      <Route path='/State' element={<UseStateOne/>}/>
      <Route path='/Effect' element={<UseEffectone/>}/>
      <Route path='/box' element={<BoxColour/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/useref' element={<UseRefone/>}/>
      <Route path='/values' element={<ValueFetching/>}/>
      <Route path='/valuestwo' element={<ValueFetchingTwo/>}/>
      <Route path='/valuesUseRef' element={<ValueFetchingUseRef/>}/>
      <Route path='/styledComponent' element={<StyledComponents/>}/>
      <Route path='/signup' element={<Facebook/>}></Route>
      <Route path='/login' element={<Facebookclone/>}></Route>
      <Route path='/Use' element={<UseReducer/>}></Route>
      <Route path='/Return' element={<UseeffcetReturn/>}></Route>
      <Route path='/Reducer' element={<UseaReducerOne/>}></Route>
      <Route path='/First' element={<First/>}></Route>
      <Route path='/Second' element={<Second/>}></Route>
      <Route path='/Third' element={<Third/>}></Route>
      
 
     
      

      
      </>
    )


  )


  return (
    <>
<Appcontext.Provider value={a}>
      <RouterProvider router={router}/>
</Appcontext.Provider>
     

    </>
  )
}

export default App
