import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Route>
    )


  )


  return (
    <>
  <RouterProvider router={router}/>
     

    </>
  )
}

export default App
