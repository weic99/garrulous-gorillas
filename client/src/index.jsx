import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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

