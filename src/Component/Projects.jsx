import React from 'react'
import { Link } from 'react-router-dom'
import calculator from '../Assets/calculator.png'
import todoapp from '../Assets/todoapp.png'
import movie from '../Assets/movie.png'
import resturant from '../Assets/resturant.png'
import tripoto from '../Assets/tripoto.png'
import { useContext } from 'react'
import { Context } from '../Context'


const Projects = () => {
    const { mode, setMode } = useContext(Context)
    const changeMode = () => {
        setMode(!mode)

    }
    let myStyles = {
        border: "2px solid black",
        height: "50vh",
        background: "black",
        color: "white",
        overflow: "auto"
    }

    let sty = {
        height: "40%",
        width: "90%",
        borderRadius: "0%",
        marginTop: "30px ",
      



    }
    return (
        <div style={myStyles} className={` bg-${mode ? 'light' : 'dark'} justify-content-center vh-100`}>
            <Link />

            <div className={` text-${mode ? 'dark' : 'light'} text-center justify-content-center`}>
                <h3 className={`text-${mode ? 'danger' : 'primary'} fst-italic text-center mt-3 fs-1 text-primary`}  >Projects</h3>
                <p className=' fst-italic text-center m-1 fs-4 '>I have worked on a wide range of projects during my Academics.</p>
                <p className=' fst-italic text-center m-1 fs-4 '>Here are some of my Projects</p>
            </div>
            <div className=' text-center  d-flex   '>
                <div>

                </div>

                <div className={` text-${mode ? 'dark' : 'light'} text-center justify-content-center`}>
                    <div className={`border border-${mode ? 'danger' : 'primary'} m-2 rounded-4`}>
                        <img style={sty} src={tripoto} alt='tripoto' />
                        <div className='mt-4'>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>HTML</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>CSS</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>JavaScript</span>
                            <br /><br />
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>React js</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>Redux</span>
                            <h4 className='mt-3'>Tripoto</h4>
                            <h4 className='fs-5 m-0 mb-3'>July 2024</h4>
                            <p className='fst-italic m-0 mb-5' >Tripoto is a travel Booking website,providing an end-to-end
                                solution to your traveling by booking handly.</p>
                        </div>
                    </div>
                </div>
                <div className={` text-${mode ? 'dark' : 'light'} text-center justify-content-center`}>
                    <div className={`border border-${mode ? 'danger' : 'primary'} m-2 rounded-4`}>
                        <img style={sty} src={resturant} alt='resturant' />
                        <div className='mt-4'>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>HTML</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>CSS</span><br /><br />
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>Javascript</span>



                            <h4 className='mt-3 '>Resturant site</h4>
                            <h4 className='fs-5 m-0 mb-3'>Oct 2023</h4>
                            <p className='fst-italic m-0 mb-5' >Website for a Restaurant.It is completely responsive.
                                No other libraries used to Style the website Complete CSS code.
                            </p>
                        </div>


                    </div>


                </div>
                <div className={` text-${mode ? 'dark' : 'light'} text-center justify-content-center`}>
                    <div className={`border border-${mode ? 'danger' : 'primary'} m-2 rounded-4`}>
                        <img style={sty} src={movie} alt='movieapp' />
                        <div className='mt-4 '>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>HTML</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>CSS</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>My Sql</span>
                            <br /><br />
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>React js</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>Boostrap</span>
                            <h4 className='mt-3'>Movie Search App</h4>
                            <h4 className='fs-5 m-0 mb-3'>March 2025</h4>
                            <p className='fst-italic m-0 mb-5' >The Movie Search App allows users to search for movies,
                                view details, and add them to their favourites list.
                            </p>

                        </div>
                    </div> </div>

                <div className={` text-${mode ? 'dark' : 'light'} text-center justify-content-center`}>
                    <div className={`border border-${mode ? 'danger' : 'primary'} m-2 rounded-4`}>
                        <img style={sty} src={todoapp} alt='todoapp' />
                        <div className='mt-4'>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>HTML</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>CSS</span>
                            <br /><br />
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>React js</span>
                            <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>Boostrap</span>
                            <h4 className='mt-3'>TodoApp</h4>
                            <h4 className='fs-5 m-0 mb-3'>Jan 2024</h4>
                            <p className='fst-italic m-0 mb-5' >We can add todo , mark it completed and delete the todo from browser.
                                we can switch from light mode to dark</p>
                        </div>
                    </div>
                </div>



                <div className='text-center  d-flex   '>
                    <div className={` text-${mode ? 'dark' : 'light'} text-center justify-content-center`}>
                        <div className={`border border-${mode ? 'danger' : 'primary'} m-2 rounded-4`}>
                            <img style={sty} src={calculator} alt='calculator' />
                            <div className='mt-4'>
                                <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>HTML</span>
                                <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>CSS</span>
                                <br /><br />
                                <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>React js</span>
                                <span className={`border border-${mode ? 'danger' : 'primary'} p-2 m-1 rounded-3`}>Boostrap</span>
                                <h4 className='mt-3'>Calculator</h4>
                                <h4 className='fs-5 m-0 mb-3'>Dec 2023</h4>
                                <p className='fst-italic m-0 mb-5' >This app includes math operations functionalities.
                                    like addition,substraction,division</p>
                            </div>
                        </div>



                    </div>
                </div>



            </div>
        </div>
    )
}

export default Projects