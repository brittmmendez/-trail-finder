import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTrail } from '../actions';

class TrailsNew extends Component {

  constructor(props) {
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
    const { createTrail, history } = this.props;
    // Create the trail with the Redux action
    createTrail(this.state, history);
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <label>
          Name:
            <input
              type="text"
              name="name"
              placeholder="Trail Name"
              value={this.state.name}
              onChange={this.handleOnChange}
              />
        </label> <br></br>
        <label>
          Distance:
            <input
              type="text"
              name="distance"
              placeholder="Distance in Miles"
              value={this.state.distance}
              onChange={this.handleOnChange}
              />
        </label><br></br>
        <label>
          Description:
            <textarea
              name="description"
              placeholder="Add Description"
              value={this.state.description}
              onChange={this.handleOnChange}
              />
        </label><br></br>
        <input type="submit" value="Add Trail" />
      </form>
    );
  }
}

export default connect(null, { createTrail })(TrailsNew)
