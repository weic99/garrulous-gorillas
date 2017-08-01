import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import DebateFloor from './components/debate/DebateFloor.jsx'

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
        <div>Nav Goes Here</div>
        <DebateFloor />
        <div>Chat Goes Here<div>
      </div>)
  }
}

ReactDOM.render((
  <Router>
    <App />
  </Router>
  ), document.getElementById('app'));

