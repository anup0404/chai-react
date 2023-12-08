import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from  './Components/NavBar';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
   <BrowserRouter>
   <NavBar/>
   <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/> 
   </Routes>
   
   
   </BrowserRouter>
  )
}

export default App