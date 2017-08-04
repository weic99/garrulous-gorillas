import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class Argument extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      voted: false,
      status: 'Vote Here',
    }

    this.handleVote=this.handleVote.bind(this)
  }  

  handleVote() {
    if (!this.state.voted) {
    this.setState({
      voted: !this.state.voted,
      status: 'Received'
    })
    this.props.handleVote();
    }
    console.log('voted insde arg', this.state.voted)
  }

  render() {
    return(
      <div>
        <form>
          <Button onClick={this.handleVote}>
            {this.state.status}
          </Button>{this.props.argument}
        </form>
      </div>
      )
  }
}
export default Argument;


