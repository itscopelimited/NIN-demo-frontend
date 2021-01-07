import React,{useState} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'
import Profile from './profile'

function Login({email,userEmail,password,userPassword, submit}) {
    // if(loginResponse){
    //     return <Profile data={loginResponse}/>
    // }
    // else{
        // const [loginEmail, setLoginEmail] = useState('')
        // const [loginPassword, setLoginPassword] = useState('')
        // const handleLoginEmail = (e) =>{
        //     setLoginEmail(e.target.value)
        //     email(loginEmail)
        // }
        // const handleLoginPassword = (e) =>{
        //     setLoginPassword(e.target.value)
        //     password(loginPassword)
        // }
        
        return (
            <>
                <img src={NIMClogo} alt="NIMC Logo" className='nimc'/>
                <p className="description">Login to access your NIN form</p>
                <form onSubmit={()=>submit()} className='account_form col s12' action="POST">
                    <div className="input-field col s12">
                        <label htmlFor="username">Email: </label>
                        <input value={userEmail} onChange={email()} type="text" name='username'/>
                    </div>

                    <div className="input-field col s12">
                        <label htmlFor="password">Password: </label>
                        <input value={userPassword} onChange={password()} type="password" name='password'/>
                    </div>

                    <button type='submit' className='create_button' >Login</button>
                </form> 
                <p className='existing_login'>
                    Don't have an account? &nbsp;  
                    <Link to='/'>
                        Create Account
                    </Link>
                </p>   
            </>
        )
    // }
}

export default Login
