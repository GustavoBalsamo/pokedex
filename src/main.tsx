import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { ChakraProvider } from '@chakra-ui/react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Home } from './Components/Home/index.js'
import { Header } from './Components/Header/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/1",
    element: <Header/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
