import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Main from './components/Main.jsx';
import DebateFloor from './components/debate/DebateFloor.jsx';
import Login from './components/login/login.jsx';
import SignUp from './components/signup/signup.jsx';
import Chatview from './components/chatview/chatview.jsx';
import Forview from './components/chatview/forview.jsx';
import Againstview from './components/chatview/againstview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {

    // query database for points and pass to positions

  }

  render() {
    return (
      <div>
        <Nav />

        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/Home" component={Main}/>
          <Route path="/debatesample" component={DebateFloor}/>
          <div>Chat Goes Here</div>          
          <h1>Spectators</h1>
          <Chatview />
          
          <h1>For</h1>
          <Forview />
          
          <h1>Against</h1>
          <Againstview />
        </Switch>

      </div>)
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));

