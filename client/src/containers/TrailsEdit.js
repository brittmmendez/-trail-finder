import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component 
import { editTrail } from '../actions';
import { Button } from 'react-bootstrap';

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
      <div className="container-fluid text-center">
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          <label>
            Name: <br></br>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}
                />
          </label> <br></br>
          <label>
            Distance: <br></br>
              <input
                type="text"
                name="distance"
                value={this.state.distance}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <label>
            Description: <br></br>
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <Button bsStyle='primary' type="submit"> <span class="glyphicon glyphicon-ok"></span> Update Trail </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    trail: state.trails.trail
  })
}

export default connect(mapStateToProps, {editTrail})(TrailsEdit);
