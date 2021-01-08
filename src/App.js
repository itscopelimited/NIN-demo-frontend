import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
// import '../node_modules/materialize-css/js/forms'
// import '../node_modules/materialize-css/js/select'
import Createaccount from './components/createaccount';
import Login from './components/login'
import Enrolmentform from './components/enrolmentform'
import Verify from './components/verify'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from './components/profile';
import Home from './components/home';

function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/create' component={Createaccount}/>
          <Route path='/login' component={Login}/>
          <Route path='/enrolmentform' component={Enrolmentform} />
          <Route path='/verify' component={Verify} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
