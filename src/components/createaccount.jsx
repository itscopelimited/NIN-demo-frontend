import React, {useState} from 'react'
import NIMClogo from './img/nimc.png'
import {Link} from 'react-router-dom'
import Verify from './verify'
import Spinner from './spinner'

function Createaccount() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [statusCode, setStatusCode] = useState(400)
    const [responseData, setResponseData] = useState('')
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)
    
    const handleFirstName = ({target}) =>{
        setFirstName(target.value)
    }
    const handleLastName = ({target}) =>{
        setLastName(target.value)
    }
    const handleNumber = ({target}) =>{
        setNumber(target.value)
    }
    const handleEmail = ({target}) =>{
        setEmail(target.value)
    }
    const handlePassword = ({target}) =>{
        setPassword(target.value)
    }

    const formData = {
        firstName: firstName,
        lastName: lastName,
        phone: number,
        email: email,
        password: password
    }

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault();
        let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailValue = email
        if(firstName === ''){
            alert('Name field is empty')
            return false;
        }
        else if(lastName === ''){
            alert('Username field is empty')
            return false
        }
        else if(number.length < 11 || number === ''){
            alert('Please enter a valid phone number')
        }
        else if(!emailReg.test(emailValue)){
            alert('Please enter a valid email')
            return false
        }
        else if(password === ''){
            alert('Please enter a password')
            return false
        }
        else{
            setLoading(true)
            await fetch("https://cors-anywhere.herokuapp.com/http://167.99.82.56:5050/api/v1/register",
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
                else if(data.errors.phone){
                    alert(`${data.errors.phone}`)
                    setLoading(false)
                }
                else if(data.errors.email){
                    alert(`${data.errors.email}`)
                    setLoading(false)
                }
                // setStatusCode(data.status)
                else if(data.status === 201){
                    setResponseData(data)
                    setCount(count + 1)
                }
                
                // console.log(responseData)
                
            })
            .catch((err) => console.log(err));
        }
    }

    if(count === 0){
        return (
            <>
                <img src={NIMClogo} alt="NIMC Logo" className='nimc'/>
                    <p className="description">Sign up for access to your NIN form</p>
                    <form onSubmit={handleSubmit} className='account_form col s12' action="POST">
                        <div className="row">
                            <div className="input-field col s6">
                                <label htmlFor="firstName">First Name</label>
                                <input onChange={handleFirstName} type="text" id='firstName' className='validate'/>
                            </div>
                            {/* {name === '' ? <p>Name field is empty!</p> :  null} */}

                            <div className="input-field col s6">
                                <label htmlFor="username">Last Name</label>
                                <input onChange={handleLastName} type="text" id='username' className='validate'/>
                            </div>
                            
                            <div className="input-field col s12">
                                <label htmlFor="number">Phone Number</label>
                                <input onChange={handleNumber} type='tel' id='number' className='validate'/>
                            </div>

                            <div className="input-field col s12">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleEmail} type="email" id='email' className='validate'/>
                                <span className="helper-text" data-error="Please enter a valid email"></span>
                            </div>

                            <div className="input-field col s12">
                                <label htmlFor="password">Password: </label>
                                <input onChange={handlePassword} type="password" id='password' className='validate'/>
                            </div>

                            <button type='submit' className='create_button' name='action'>
                                Create Account
                            </button>
                        </div>
                    </form>  
                    {loading === true ? <Spinner/> : null}

                    <p className='existing_login'>
                        Already have an account? &nbsp;  
                        <Link to='/login'>
                            Login
                        </Link>
                    </p> 
            </>
        )
    } 
    else if(count === 1){
        return <Verify data={responseData}/>
    }
}

export default Createaccount
