import React from 'react'
import react from '../Assets/react.jpeg'
import angular from '../Assets/angular.png'
import html from '../Assets/html.png'
import webdesign from '../Assets/web design.png'
import javascript from '../Assets/javascript.png'
import css from '../Assets/css.jpg'
import jquery from '../Assets/jquery.png'
import bootstrap from '../Assets/bootstrap.png'
import cplus from '../Assets/cplus.png'
import java from '../Assets/java.png'
import python from '../Assets/python.png'
import mongodb from '../Assets/mongodb.png'
import graph from '../Assets/graph.png'
import sql from '../Assets/sql.png'
import opps from '../Assets/opps.webp'
import express from '../Assets/express.png'
import spring from '../Assets/spring.png'

import { useContext } from 'react'
import { Context } from '../Context'


const Skills = () => {
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
    let img ={
        width: "25px",
    height: "25px",
    marginRight: "4px",
   borderRadius:" 30%",
    }
   
    
    return (
        <div style={myStyles} className={` bg-${mode?'light':'dark'} row vh-100 `}>
            <div className={` text-${mode?'dark':'light'} text-center `} >
                <h3 className={`text-${mode?'danger':'primary'} mb-3 mt-3 fs-2`}> My Skills</h3>
                <p className='m-0 fst-italic fs-4'>Here are some of my skills on which I have been working </p>
                <p className='fst-italic fs-4'>during my Academics</p>
                <div className='d-flex p-5  justify-content-center'>
                    <div className={`text-${mode?'danger':'primary'} border border-${mode?'danger':'primary'} rounded-5 px-3 mx-5`}>
                        <h3 className=' fw-bold fst-italic mt-3'>Frontend</h3><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img style={img} src={react}  alt='react' />React JS</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img style={img} src={angular}  alt='angular' />Angular</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img style={img} src={angular}  alt='next' />VS Code</span><br /><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img  style={img}src={html}  alt='html' />HTML</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img style={img} src={webdesign}  alt='web' />Web Design</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img  style={img} src={javascript}  alt='javascript' />Java Script</span><br /><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img style={img} src={bootstrap} alt='boostrap' />Boostrap</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img  style={img}src={css} alt='css' />CSS</span><br /><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}> <img style={img} src={jquery} alt='jquery'/>JQuery</span><br /><br />

                    </div>
                    <div className={`text-${mode?'danger':'primary'}  border border-${mode?'danger':'primary'} rounded-5 px-3  mx-5`}>
                        <h3 className=' fw-bold fst-italic  mt-3' >Backend</h3><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img}  src={cplus}  alt='cplus' />C++</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img}  src={express}  alt='express' />Express JS</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img}  src={java}  alt='java' />Java</span><br /><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img}  src={graph}  alt='graph' />Graph QI </span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img  style={img} src={mongodb}  alt='mongodb' />MongoDB</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img}  src={spring}  alt='spring' />Spring boot</span><br /><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img  style={img} src={python}  alt='python' />Python</span>
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img} src={opps}  alt='opps' />OPPS Concept</span><br /><br />
                        <span className={`border border-${mode?'danger':'primary'} p-2 m-2 rounded-3 `}><img style={img}  src={sql}  alt='sql' />My SQL</span><br />


                    </div>
                </div>
           
            </div>
        </div>
    )
}

export default Skills