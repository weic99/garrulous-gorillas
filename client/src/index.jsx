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
      currentDebateSelected: {},
      debateIsSelected: false
    }

    this.debateSelectHandler = (debateSelected) => {
      // When a debate is clicked, App will be notified and get the current debate data
      console.log('[App] debateSelectHandler fired -->', debateSelected);

      // Save current debate/status in state
      this.setState({currentDebateSelected: debateSelected});
      this.setState({debateIsSelected: true});
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
          <Route exact path="/" component={ () => <Main debateSelectHandler={this.debateSelectHandler} debateIsSelected={this.debateIsSelected} currentDebate={this.state.currentDebate}/> }/>
          <Route path="/home" component={ () => <Main debateSelectHandler={this.debateSelectHandler} debateIsSelected={this.debateIsSelected} currentDebate={this.state.currentDebate}/> }/>
          <Route path="/debatesample" component={ () => <DebateFloor currentDebate={this.state.currentDebate}/> }/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>

          <DebateFloor currentDebate={this.state.currentDebate} debateIsSelected={this.state.debateIsSelected}/>
        </Switch>
      </div>)
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));

