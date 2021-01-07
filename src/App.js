import './App.css';
import react, {useState} from 'react'
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
// import '../node_modules/materialize-css/js/forms'
// import '../node_modules/materialize-css/js/select'
import Createaccount from './components/createaccount';
import Login from './components/login'
import Enrolmentform from './components/enrolmentform'
import Verify from './components/verify'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Profile from './components/profile';

function App() {
  
  const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginResponse, setLoginResponse] = useState('')
    
    const handleUserEmail = (target) =>{
        setUserEmail(target)
    }
    const handlePassword = (target) =>{
        setPassword(target)
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
            setLoginResponse(data)
            if(data.status === 400){
                alert('Incorrect Email or Password')
            }else{
              //window.location ='/profile'
              return <Redirect to='/profile'/>
            }
        })
        .catch((err) => console.log(err));
    }
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Createaccount}/>
          <Route path='/login' component={()=>
            <Login submit={handleSubmit} 
                   email={handleUserEmail}
                   password={handlePassword}
                   userEmail={userEmail}
                   userPassword={password}
                   />}
          />
          <Route path='/enrolmentform' component={Enrolmentform} />
          <Route path='/verify' component={Verify} />
          <Route path='/profile' component={()=><Profile data={loginResponse}/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
