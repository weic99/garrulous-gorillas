import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import DebateFloor from './components/debate/DebateFloor.jsx';
import Login from './components/login/login.jsx';
import Chatview from './components/chatview/chatview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Nav />
        <h1>TEST APP main routing is completed</h1>
        <Main />
        <div>Nav Goes Here</div>
        <DebateFloor />
        <div>Chat Goes Here</div>
        
        <div>Sample login</div>
        <Login />
        <h1>TEST APP</h1>
        <Chatview />
      </div>)
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));

