
import { BrowserRouter } from 'react-router-dom';
 import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Skills from './Component/Skills';
import About from './Component/About';
import Education from './Component/Education';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import { Context } from './Context';
import { useState } from 'react';

 


function App() {
  const [mode, setMode] = useState(true)
  return (
    <div>
       <Context.Provider value={{  mode, setMode }}> 
        <BrowserRouter>
       <Navbar/>
        <Routes>
       
      <Route path="/" element={<Home/>}/> 
      <Route path="/home" element={<Home/>}/> 
      <Route path="/about" element={<About/>}/> 
      <Route path="/education" element={<Education/>}/> 
      <Route path="/projects" element={<Projects/>}/> 
      <Route path="/contact" element={<Contact/>}/> 
      <Route path="/skills" element={<Skills/>}/> 


      
     
      </Routes>
     
     </BrowserRouter>
     </Context.Provider>
      
    </div>
  );
}

export default App;
