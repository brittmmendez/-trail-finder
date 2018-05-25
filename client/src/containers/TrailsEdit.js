import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTrail } from '../actions';

class TrailsEdit extends Component {

  constructor(props) {
    super();
    this.state = {
      id: props.trail.id,
      name: props.trail.name ,
      distance: props.trail.distance,
      description: props.trail.description
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
    const { editTrail, history } = this.props;
    // Create the trail with the Redux action
    editTrail(this.state, history);
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <label>
          Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleOnChange}
              />
        </label> <br></br>
        <label>
          Distance:
            <input
              type="text"
              name="distance"
              value={this.state.distance}
              onChange={this.handleOnChange}
              />
        </label><br></br>
        <label>
          Description:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleOnChange}
              />
        </label><br></br>
        <input type="submit" value="Update Trail" />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    trail: state.trails.trail
  })
}

export default connect(mapStateToProps, {editTrail})(TrailsEdit);
