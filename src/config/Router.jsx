import React from 'react'
import { RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Product from '../Components/Product'
import ProductDetails from '../Components/ProductDetails'




const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
      
      <Route path="/" element={<Product/>}/>
      <Route path="product/:id" element={<ProductDetails/>}/>
      </Route>


    )

)


const Router = () => {


  return (
    <div>

        <RouterProvider router={router}/>


      
    </div>
  )
}

export default Router
