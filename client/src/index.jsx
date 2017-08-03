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

  }

  render() {
    return (
      <div>
        <Nav />
        <h1 >Garrulous - Where Walter Is King</h1>
        <Main />
        <div>Nav Goes Here</div>

        <DebateFloor />
        <div>Chat Goes Here</div>

        <h1>Spectators</h1>
        <Chatview />

        
        <h1>For</h1>
        <Forview />
        
        <h1>Against</h1>
        <Againstview />



        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/" component={Main}/>
          <Main />
          <DebateFloor />
          <div>Chat Goes Here</div>
          
          <div>Sample Login</div>
          <Login />
          
          <div>Sample Sign up</div>
          <SignUp />
          
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

