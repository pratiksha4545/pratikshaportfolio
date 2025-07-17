import React from 'react'
import img1 from '../Assets/img1.gif'
import { useContext } from 'react'
import { Context } from '../Context'

const About = () => {
    const {mode ,setMode}= useContext(Context)
    const changeMode =()=>{
      setMode(!mode)
  
    }
    let sty = {
        height:"60%",
        width:"100%",
        borderRadius:"0%",
        marginTop:"25px ",
        paddingLeft:"250px"
         }
    let myStyles = {
        border: "2px solid black",
        height: "100%",
        background: "black",
        color: "white",
       }
    return (
        <div style={myStyles} className={` bg-${mode?'light':'dark'}  vh-100 d-flex align items-center`}  >
            <div className=''>
            <img  style={sty} src={img1}  alt='img' /> 
            </div>
            <div className={` text-${mode?'dark':'light'} px-5 py-5 w-50  `} >
                <h3 className={`text-${mode?'danger':'primary'} p-4 mt-1 fs-1`}>About Me</h3>
                <p className='  fs-5 fst-italic '>A passionate & Enthusiastic 🤓 Full Stack Web Developer & learning MERN Stack at 
                Techrel, Pune.Always eager to learn something new and deal with new tasks and challenges.</p>
                <p className='  fs-5 fst-italic  '>
              I have done my Post Graducation in Computer Application 🎓Degree from pune ,Maharashtra, India.</p>
              <p className='  fs-5 fst-italic  '>
               A dedicated aspiring React web developer with a deep passion for creating captivating user interfaces.
                    My toolkit includes React, HTML, CSS, and JavaScript – ingredients I use to craft immersive digital experiences.
                    I thrive in collaborative environments that foster innovation and teamwork.
                    Eager to contribute fresh perspectives and eager to learn, I'm excited to join forces
                    and contribute to cutting-edge web solutions.</p>
            </div>

           
        </div>
    )
}

export default About