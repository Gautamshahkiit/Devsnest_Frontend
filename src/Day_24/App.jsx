import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";

import { AuthContext } from './Context';

function App() {
  return (
    <Router>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>

      
        <Switch>
            <AuthContext>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/profile" component={Profile}></Route>
              <Route exact path="/Dashboard" component={Dashboard}></Route>  
          </AuthContext>
        </Switch>


    </Router>
  );
}

export default App;
