import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { ChakraProvider } from '@chakra-ui/react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Home } from './Components/Home/index.js'
import { Pokedex } from './Components/Pokedex';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "pokedex",
    element: <Pokedex/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
