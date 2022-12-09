import React from 'react'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { allRouters } from './constant'

function App() {
  return <RouterProvider router={createBrowserRouter(allRouters)} />
}

export default App
