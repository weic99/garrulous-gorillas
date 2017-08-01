import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chatview from 'debateChat';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, term) {
    e.preventDefault();
    fetch(`/search?term=${term}`)
      .then(response => response.json())
      .then(results => {
        this.setState({items: results})
      })

  }

  render () {
    return (
      <div> 
        <debateChat />
      </div>
    )
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));