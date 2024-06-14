import { useState } from 'react'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Wordle from './pages/Wordle'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='/wordle/:word' element={<Wordle word='Aditya' trys={6}></Wordle>}></Route>
      <Route index element={<Home></Home>}></Route>
    </Route>)
  );

  return (
    <>      
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
