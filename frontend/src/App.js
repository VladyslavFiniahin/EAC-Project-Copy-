import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home/home';
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
import React from 'react';
import Error from './pages/404/404'
import Accaunt from './pages/Account/accaunt';
import Activity from './pages/Activity/activity';
import Settings from './pages/Settings/settings';
import Share from "./pages/Share/share";

/*
import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(response => setData(response.message))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {
            !data ? 'Loading...' : data
          }
        </p>

      </header>
    </div>
  );
}
*/

class App extends React.Component {
  
  render() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/sign-up" Component={Signup}/>
          <Route exact path="/login" Component={Login}/>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/activity" Component={Activity}/>
          <Route path="*" Component={Error}/>
          <Route path='/accaunt-settings' Component={Accaunt}/>
          <Route path='/settings' Component={Settings}/>
          <Route path='/share' Component={Share}/>
        </Routes>
      </Router>
    </div>
  );
}
}

export default App;
