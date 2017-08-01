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
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/debates'>All Debates</Link>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    )
  }
}

export default Nav;