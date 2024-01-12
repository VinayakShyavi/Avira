import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Layout} from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurStore from './pages/OurStore';
import { Blogs } from './pages/Blogs';
import { CompareProducts } from './pages/CompareProducts';
import { WishList } from './pages/WishList';
import { Login1 } from './pages/Login1';
import { Signup } from './pages/Signup';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="store" element={<OurStore/>}/>
        <Route path="blogs" element={<Blogs/>}/>
        <Route path="compareproducts" element={<CompareProducts/>}/>
        <Route path="wishlist" element={<WishList/>}/>
        <Route path="login" element={<Login1/>}/>
        <Route path="signup" element={<Signup/>}/>

      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
