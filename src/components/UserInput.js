import React, { Component } from 'react';

class UserInput extends Component {
  
  state = {
    username: "",
    hometown: ""
  }
  
  handleUsernameInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  
  handleHometownInput = (e) => {
    this.setState({
      hometown: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: { username: this.state.username, hometown: this.state.hometown }
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleUsernameInput(e)} value={this.state.username}></input>
          <input type="text" onChange={(e) => this.handleHometownInput(e)} value={this.state.hometown}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default UserInput;
