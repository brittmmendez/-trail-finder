import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrail } from '../actions';

class TrailsNew extends Component {

  constructor() {
    super();

    this.state = {
      name: '' ,
      distance: '' ,
      description: ''
    };
  }

  handleOnChange = event => {
      // Handle Updating Component State
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    // Destructure addTrail and history from the components props
    const { addTrail, history } = this.props;
    // Create the trail with the Redux action
    addTrail(this.state);
    // redirect to /trails route
    history.push('/trails')
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input
          type="text"
          name="name"
          placeholder="Trail Name"
          value={this.state.name}
          onChange={this.handleOnChange}
          />
        <input
          type="text"
          name="distance"
          placeholder="Distance"
          value={this.state.distance}
          onChange={this.handleOnChange}
          />
        <input
          type="text"
          name="description"
          placeholder="Add Description"
          value={this.state.description}
          onChange={this.handleOnChange}
          />
        <input type="submit" value="Add Trail" />
      </form>
    );
  }
}

export default connect(null, { addTrail })(TrailsNew)
