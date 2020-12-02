import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'

const App = () => {
  
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}/>
    </Router>
  );
}

export default App;
