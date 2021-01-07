import React,{useState} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'
import Profile from './profile'

function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginResponse, setLoginResponse] = useState(null)
    
    const handleUserEmail = ({target}) =>{
        setUserEmail(target.value)
    }
    const handlePassword = ({target}) =>{
        setPassword(target.value)
    }

    const formData = {
        key: userEmail,
        password: password
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(userEmail === ''){
            alert('Email field is empty')
            return false
        }
        await fetch("",
            {
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                    "Access-Control-Allow-Origin": '*'
                },
                method: "POST",
                mode: 'cors',
                body: JSON.stringify(formData)
            })
        .then((response) => response.json() )
        .then((data) => {
            setLoginResponse(data)
            if(data.status === 400){
                alert('Incorrect Email or Password')
            }
        })
        .catch((err) => console.log(err));
    }

    if(loginResponse){
        return <Profile data={loginResponse}/>
    }
    else{
        return (
            <>
                <img src={NIMClogo} alt="NIMC Logo" className='nimc'/>
                <p className="description">Login to access your NIN form</p>
                <form onSubmit={handleSubmit} className='account_form col s12' action="POST">
                    <div className="input-field col s12">
                        <label htmlFor="username">Email: </label>
                        <input onChange={handleUserEmail} type="text" name='username'/>
                    </div>

                    <div className="input-field col s12">
                        <label htmlFor="password">Password: </label>
                        <input onChange={handlePassword} type="password" name='password'/>
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
    }
}

export default Login
