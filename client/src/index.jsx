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



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDebateSelected: {}
    }

    this.debateSelectHandler = (debateSelected) => {
      // When a debate is clicked, App will be notified and get the current debate data
      console.log('[App] DebateSELECT fired', debateSelected);

      // Save current debate in state
      this.setState({currentDebateSelected: debateSelected});
    }

    this.debateSelectHandler.bind(this);
  }

  componentDidMount() {

    // query database for points and pass to positions

  }

  render() {
    return (
      <div>
        <Nav />
        <h1 >Garrulous - Where Walter Is King</h1>
        <Switch>
          <Route path="/" component={ () => <Main debateSelectHandler={this.debateSelectHandler}/> }/>
          <Route path="/home" component={ () => <Main debateSelectHandler={this.debateSelectHandler}/> }/>
          <Route path="/debatesample" component={ () => <DebateFloor /> }/>
          <Route path="/login" component={ () => <Login /> }/>
          <Route path="/signup" component={ () => <SignUp /> }/>
        </Switch>
      </div>)
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));

