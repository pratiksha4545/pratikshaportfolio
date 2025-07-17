import React from 'react'
import{Link} from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'

const Navbar = () => {
  
  const {mode ,setMode}= useContext(Context)
  const changeMode =()=>{
    setMode(!mode)

  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-gradient bg-${mode?'danger':'primary'} `} >
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold fst-italic" >Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 fw-bold  fst-italic ">
      <li className="nav-item ">
          <Link className="nav-link  " to="/home" >Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/education">Education</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact" >Contacts</Link>
        </li>
        <li className="nav-item">
         <button className="nav-link" href ="#"onClick={changeMode}>{mode?'🌙':'☀️'}</button>
        </li>
       
       </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar