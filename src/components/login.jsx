import React,{useState} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'
import Profile from './profile'
import Spinner from './spinner'

function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginResponse, setLoginResponse] = useState('')
    const [loading, setLoading] = useState(false)

    const handleUserEmail = ({target}) =>{
        setUserEmail(target.value)
        sessionStorage.setItem('__browser_user', target.value)
    }
    const handlePassword = ({target}) =>{
        setPassword(target.value)
        sessionStorage.setItem('__browser_secret', target.value)
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
        if(password === ''){
            alert('Password field is empty')
            return false
        }
        setLoading(true)
        await fetch("https://cors-anywhere.herokuapp.com/http://167.99.82.56:5050/api/v1/login",
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
            console.log(data)
            
            if(data.errors.password){
                alert(`${data.errors.password}`)
                setLoading(false)
            }
            else if(data.status === 401){
                alert(`${data.message}`)
                setLoading(false)
            }else{
                setLoginResponse(data)
                sessionStorage.setItem('__browser_data', `${data.data.token}`)
            }
            
        })
        .catch((err) => console.log(err));
    }
    // useEffect(() => {
    //     let user = sessionStorage.getItem('__browser_user')
    //     let secret = sessionStorage.getItem('__browser_secret')
    //     if(user && secret){
    //         return (<Profile data={loginResponse}/>)
    //     }
    //     // alert(`${loginResponse.message}!`)
    // })

    
    if(loginResponse.status){
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
                        <input onChange={handleUserEmail} type="email" id='username' name='username' className='validate'/>
                        <span className="helper-text" data-error="Please enter a valid email"></span>
                    </div>

                    <div className="input-field col s12">
                        <label htmlFor="password">Password: </label>
                        <input onChange={handlePassword} type="password" name='password' className='validate'/>
                    </div>

                    <button type='submit' className='create_button' >Login</button>
                    
                </form> 
                {loading === true ? <Spinner/> : null}
                <p className='existing_login'>
                    Don't have an account? &nbsp;  
                    <Link to='/create'>
                        Create Account
                    </Link>
                </p>   
            </>
        )
    }
}

export default Login
