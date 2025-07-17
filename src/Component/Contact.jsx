import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'

const Contact = () => {
  const { mode, setMode } = useContext(Context)
  const changeMode = () => {
    setMode(!mode)

  }
  let myStyles = {
    border: "2px solid black",
    height: "100%",
    background: "black",
    color: "white",
  }
  return (
    
    <div style={myStyles} className={` bg-${mode?'light':'dark'}  vh-100 `}  >
      <div className={`text-${mode?'danger':'primary'} `}>
       <h2 className='text-center mt-3 fst-italic fs-1'>Contact Me</h2>
      <div style={{  paddingLeft:"500px" }} className='  '>
        <div style={{ width: "50%" }} className={` border border-${mode?'danger':'primary'} rounded-4  mt-3`}>
          <h3 className='mx-4 mt-3 '>Email Me</h3>
          <input style={{ width: "90%"  ,height:"45px"}} className='rounded-3 mb-3 mx-4 bg-dark border border-light p-3 ' type="text" placeholder='Your Email' /><br />
          <input style={{ width: "90%" ,height:"45px" }} className=' rounded-3 mb-3 mx-4 bg-dark border border-light p-3' type="text" placeholder='Your Name' /><br />
          <input style={{ width: "90%" ,height:"45px" }} className='rounded-3 mb-3 mx-4 bg-dark border border-light  p-3' type="text" placeholder='Subject' /><br />
      <textarea style={{ width: "90%"  }}  className='rounded-3 mb-3 mx-4 bg-dark border border-light p-3' name="" id="" cols="30" rows="5" placeholder='Message'></textarea><br />
          <button style={{ width: "90%" ,height:"45px" }}className={` bg-${mode?'danger':'primary'} text-center rounded-3 mb-3 mx-4 `}>Send</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact