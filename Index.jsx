import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./composnets/App";
import Home from "./composnets/Home";
import Products from "./composnets/Products";
import ProductDetails from "./composnets/ProductDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/product',
          element : <Products/>,
        },
        {
          path : '/product/:productName',
          element : <ProductDetails/>,
        },
    ]    
  }
])
const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={router}/>)