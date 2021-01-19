import React,{useState} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'
//import Profile from './profile'
import Spinner from './spinner'

function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginResponse, setLoginResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState('')
    const [cookies, setCookies] = useState('')
    const [formcount] = useState(0)

    const handleUserEmail = ({target}) =>{
        setUserEmail(target.value)
        localStorage.setItem('__browser_user', target.value)
    }
    const handlePassword = ({target}) =>{
        setPassword(target.value)
        localStorage.setItem('__browser_secret', target.value)
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
                alert(data.errors.password)
                setLoading(false)
            }
            else if(data.errors.key){
                alert(data.errors.key)
                window.location = '/#/create'
            }
            else if(data.status === 401){
                alert(data.message)
                setLoading(false)
            }
            else{
                setLoginResponse(data)
                setToken(data.data.token)
                localStorage.setItem('__browser_data', `${data.data.token}`)
                localStorage.setItem('__name', `${data.data.user.firstName} ${data.data.user.lastName}`)
                let timeToAdd = 1000 * 60 * 60 * 24 * 1;
                var date = new Date();
                let expiryTime = parseInt(date.getTime()) + timeToAdd;
                date.setTime(expiryTime)
                let utcTime = date.toUTCString();
                document.cookie = `__browser_data= ${data.data.token}; expires=${utcTime};`
                setCookies(document.cookie)

                // const currentTime = new Date().getTime();
                // document.cookie = `__browser_data= ${data.data.token}; expires=${currentTime + (60 * 60 * 24 * 1000 * 1)};`
                // const TOKEN = browser.cookies.get({
                //     name: '__browser_data'
                // })
                // console.log(TOKEN)
            }
        })
        .catch((err) => console.log(err));
    }

    const formCounter = () =>{
        return formcount === 0 ? <h5>No Forms Filled!</h5> : formcount
    }

    const handleLocalData = () =>{
        localStorage.clear();
        document.cookie = "__browser_data=; max-age=0";
        return window.location.reload()
    }

    const openForm = () =>{
        window.location = '/#/enrolmentform'
    }


    let email = localStorage.getItem('__browser_user')
    let name = localStorage.getItem('__name')
    if(/__browser_data/.test(document.cookie)){
        return (
            <div className="home-container">
                <div className="container z-depth-4">
                    <img src={NIMClogo} alt="NIMC Logo" className='nimc'/>
                    <p>User Profile</p>
                    <div className=" green lighten-3">
                        <div className="row">
                            <div className="divider"></div>
                            <div className="section">
                                <p>NAME</p>
                                <p>{name}</p>
                            </div> 
                            <div className="divider"></div>
                            <div className="section">
                                <p>EMAIL</p>
                                <p>{email}</p>
                            </div>
                            <div className="divider"></div>
                            <div className="section">
                                <p>FORM COUNT</p>
                                <p>{formCounter()}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={openForm} style={{margin:'10px'}} className='btn green white-text'>
                        Fill Form
                    </button>
                    <button onClick={handleLocalData} style={{margin:'10px'}} className='btn red'>Log Out</button>
                </div>
            </div>
        )
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
