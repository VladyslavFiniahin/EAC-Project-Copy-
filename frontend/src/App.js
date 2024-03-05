import Home from './pages/Home/home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Error from './pages/404/404'
import Accaunt from './pages/Account/accaunt';

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
          <Route exact path="/" Component={Home}/>
          <Route path="*" Component={Error}/>
          <Route path='/accaunt-settings' Component={Accaunt}/>
        </Routes>
      </Router>
    </div>
  );
}
}

export default App;
