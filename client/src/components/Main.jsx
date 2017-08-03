import React from 'react';
import DebateItem from './DebateItem.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import DebateFloor from './debate/DebateFloor.jsx';

import axios from 'axios';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      debates: []
    }

    this.getAllActive = () => {

      axios.get('http://localhost:3000/debates/api/get')
      .then(response => {
        console.log('[Main] Get debates success:', response);
        this.setState({
          debates: response.data.data
        })
      })
      .catch(err => {
        console.log('[Main] Get debates ERROR:', err);
      })
    }
  }

  componentDidMount() {
    this.getAllActive();
  }

  render() {
    return (
      <div>
      <h4>List of Debates</h4>
      { this.state.debates.map( (item, i) => <DebateItem debate = {item} key= {i}/> )}
      <Switch>
        <Route path='/debates/gun-control-in-america' component={DebateFloor} />
      </Switch>
      </div>
    )
  }

}

export default Main;
