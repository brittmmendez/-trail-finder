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
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createTrail, history } = this.props;
    createTrail(this.state, history);
  }

  render(){
    return (
      <div className="container-fluid text-center">
        <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
          <label>
            Name: <br></br>
              <input
                className="form-control"
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
                className="form-control"
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
                className="form-control"
                style={{width: 148, height: 90}}
                type="text"
                name="description"
                placeholder="Add Description"
                value={this.state.description}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <Button className="btn btn-outline-primary" type="submit"> <span className="glyphicon glyphicon-ok"></span> Add Trail </Button>
        </form>
      </div>
    );
  }
}


export default connect(null, { createTrail })(TrailsNew)
