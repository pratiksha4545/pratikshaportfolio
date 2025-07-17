import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'
import pratikshaw from '../Assets/pratikshaw.jpg' 

import { Typewriter, } from "react-simple-typewriter";

const Home = () => {
  const {mode ,setMode}= useContext(Context)
  const changeMode =()=>{
    setMode(!mode)
  }
   
 let sty = {
  height:"320px",
  width:"325px",
  borderRadius:"50%",
  marginTop:"0px ",
  
  }
    let myStyles={
        height:"100%",
        background:"black",
        color:"white",
        }
  return (
    
          <div style={myStyles} className={` bg-${mode?'light':'dark'} row vh-100 `}>
         <Link/>
       <div className='d-flex  justify-content-center   '>
        
       <div className={` text-${mode?'dark':'light'}   mx-5`}>
        <h1 className='fw-bold fst-italic'>Hi, I am</h1>
        <h1 className='fw-bold fst-italic'> Pratiksha Warghade</h1>
        <h3 className='fw-bold fst-italic'>I am a  <span className={`text-${mode?'danger':'primary'} changing-text`}>
              {" "}
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React Developer",
                  "UI Developer",
                ]}
                loop={0}
                cursor
                cursorStyle=''
                typeSpeed={100}
                deleteSpeed={70}
                delaySpeed={2000}
               /> 
            </span></h3>
            <p  className='fst-italic fw-bold m-0 fs-4 '>To Work in a reputed firm where I can use my skills and
            knowledge to learn new things and work for challenging tasks
            and  further build upon my experience to benefit employer
            and advance my career</p><br />
           
            <button className={`btn btn-${mode?'danger':'primary'}`}>Resume</button>
            
        </div>
        <div  className='mx-5  '>
        <img style={sty}  src={pratikshaw} alt="pratiksha" />
       </div>
        </div>
         
    </div>
  )
}

export default Home
// https://i.pinimg.com/736x/d0/8c/df/d08cdfc681067dffa5ae516781c3e0e4.jpg'