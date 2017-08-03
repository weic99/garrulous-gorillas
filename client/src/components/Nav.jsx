import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './Main.jsx';
import Login from './login/login.jsx';
import SignUp from './signup/signup.jsx';

class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    

  }

  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container">
          <div className="navbar-header" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/debate'>Debate Sample</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Signup</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;