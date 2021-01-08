import React from 'react'
// import React,{useEffect} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
        <div className='home-container'>
            <div className='container z-depth-4'>
                <img src={NIMClogo} className='nimc' alt=""/>
                <div className="row">
                    <div className="col s12">
                        <h5>Welcome to the official NIMC enrolment page</h5>
                        <p className='instructions'>To fill your enrolment form, please create an account or login to existing account</p>
                    </div>
                    <div className="col s12 home-buttons">
                        <button className='btn'>
                            <Link to='/create' className='white-text'>
                                Create Account
                            </Link>
                        </button>
                        <button className='btn'>
                            <Link to='/login' className='white-text'>
                                Login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
