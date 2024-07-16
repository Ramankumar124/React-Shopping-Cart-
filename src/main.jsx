import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './Context/Context.jsx'
import { Router,RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import CartPage from './Components/Cart/CartPage.jsx'
import FilterBar from './Components/FilterBar.jsx'

const router=createBrowserRouter(
  [
   {
     path:'/',
     element:<App/>,
     children:[
      {
        path:'',
        
        element:<Home/>,
 
      },
      {
        path:"cart",
        element:<CartPage/>
      }
     ]

    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}/ >
    </CartProvider>
  </React.StrictMode>,
)
