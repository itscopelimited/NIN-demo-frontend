import React,{useState, useEffect} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'

function Profile({data}) {
    console.log(data)
    useEffect(() => {
        let token = sessionStorage.getItem('__browser_data')
        if(!token){
            window.location='/#/login'
        }
        // alert(`${data.message}!`)
    },[])
    // let name = sessionStorage.getItem('__browser_name')
    // let email = sessionStorage.getItem('__browser_email')
    // let phone = sessionStorage.getItem('__browser_phone')
    const [formcount] = useState(0)
    const styles = {
        margin: '10px',


    }
    const formCounter = () =>{
        return formcount === 0 ? <h5>No Forms Filled!</h5> : formcount
    }
    const handleSessionData = () =>{
        sessionStorage.clear();
        window.location='/login'
    }
    return (
        <>
            <div className="home-container">
                <div className="container z-depth-4">
                    <img src={NIMClogo} alt="NIMC Logo" className='nimc'/>
                    <p>User Profile</p>  
                    {/* <p>{data.data.user.firstName} {data.data.user.lastName}</p>
                    <p>{data.data.user.email}</p>
                    <p>{data.data.user.phone}</p> */}
                    <div className=" green lighten-3">
                        <div className="row">
                            <div className="divider"></div>
                            <div className="section">
                                <p>NAME</p>
                                <p>{data.data.user.firstName} {data.data.user.lastName}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <p>EMAIL</p>
                                <p>{data.data.user.email}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <p>FORM COUNT</p>
                                <p>{formCounter()}</p>
                            </div>
                        </div>
                    </div>
                    <button style={styles} className='btn green'>
                        <Link to='/enrolmentform' className='white-text'>
                            Fill Form   
                        </Link>
                    </button>
                    <button onClick={handleSessionData} style={styles} className='btn red'>Log Out</button>
                </div>
            </div>
        </>
    )
}

export default Profile
