import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import { createTrail } from '../actions';
import { Button } from 'react-bootstrap';

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
    // console.log(this.props.something);
    event.preventDefault();
    // Destructure addTrail and history from the components props
    const { createTrail, history } = this.props;
    // Create the trail with the Redux action
    createTrail(this.state, history);
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
                placeholder="Trail Name"
                value={this.state.name}
                onChange={this.handleOnChange}
                />
          </label> <br></br>
          <label>
            Distance: <br></br>
              <input
                type="text"
                name="distance"
                placeholder="Distance in Miles"
                value={this.state.distance}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <label>
            Description: <br></br>
              <textarea
                name="description"
                placeholder="Add Description"
                value={this.state.description}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <Button bsStyle='primary' type="submit"> <span className="glyphicon glyphicon-ok"></span> Add Trail </Button>
        </form>
      </div>
    );
  }
}


export default connect(null, { createTrail })(TrailsNew)
