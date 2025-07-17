import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'

const Education = () => {
    const {mode ,setMode}= useContext(Context)
    const changeMode =()=>{
      setMode(!mode)
  
    }
    let myStyles = {
        border: "2px solid black",
        height: "100%",
        background: "black",
        color: "white",
       }
  return (
    <div style={myStyles} className={` bg-${mode?'light':'dark'}  vh-100 `}>
        <div className={` text-${mode?'dark':'light'}  px-5`}>
                <h3 className={`text-${mode?'danger':'primary'} mt-3  fs-1 fst-italic text-primary text-center`} >Education</h3>
                <div className='fst-italic   pt-3 m-4 '>
                    <h4>M.Sc(Computer Application)</h4>
                    <span>Pune University</span><br />
                    <span>Percentage:85%</span><br />
                    <p>Vishwakarma college of arts,commerece and science Pune</p>
                    <hr className={`border border-${mode?'danger':'primary'}`} />
                </div>
                <div className='pt-3   m-4'>
                    <h4>B.Sc</h4>
                    <span>Pune University</span><br />
                    <span>Percentage:82%</span><br />
                    <p>S.M.Joshi College Pune</p>
                    <hr className={`border border-${mode?'danger':'primary'}`}/>
                </div>

                <div className=' pt-3  m-4'>
                    <h4>H.S.C</h4>
                    <span>C.B.S.E Board</span><br />
                    <span>Percentage:70%</span><br />
                    <p>Kendriya Vidyalaya No 3 9 brd Chandnagar Pune</p>
                    <hr className={`border border-${mode?'danger':'primary'}`} />
                </div>
                <div className=' pt-3  m-4'>
                    <h4>S.S.C</h4>
                    <span>C.B.S.E Board</span><br />
                    <span>Percentage:80%</span><br />
                    <p>Kendriya Vidyalaya No 3 9 brd Chandnagar Pune</p>
                    <hr className={`border border-${mode?'danger':'primary'}`} />
                </div>
            </div> 
    </div>
  )
}

export default Education