import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
// import '../node_modules/materialize-css/js/forms'
// import '../node_modules/materialize-css/js/select'
import Createaccount from './components/createaccount';
import Login from './components/login'
import Enrolmentform from './components/enrolmentform'
import Verify from './components/verify'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from './components/profile';
import Home from './components/home';
import Receipt from './components/receipt';

function App() {
  
  const BASE_URL = 'https://cors.bridged.cc/'

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact render={()=> <Home/>}/>
          <Route path='/create' render ={() => <Createaccount baseurl = {BASE_URL}/>}/>
          <Route path='/login' render = {() => <Login baseurl = {BASE_URL} />} />
          <Route path='/enrolmentform' render = {() => <Enrolmentform baseurl = {BASE_URL}/>} />
          <Route path='/verify' render = {() => <Verify baseurl = {BASE_URL}/>} />
          <Route path='/profile' render = {() => <Profile/>} />
          <Route path='/receipt' render = {() => <Receipt/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
