import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/cart',
      element:<Cart/>
    }
  ])


  return (
    <>
  <RouterProvider router={router}/>
     

    </>
  )
}

export default App