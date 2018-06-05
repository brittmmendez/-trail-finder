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
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    const { editTrail, history } = this.props;
    editTrail(this.state, history);
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
                value={this.state.distance}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <label>
            Description: <br></br>
              <textarea
                className="form-control"
                style={{width: 148, height: 90}}
                name="description"
                value={this.state.description}
                onChange={this.handleOnChange}
                />
          </label><br></br>
          <Button className="btn btn-outline-primary" type="submit"> <span className="glyphicon glyphicon-ok"></span> Update Trail </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.trailId
  let trail = state.trails.trails.find(trail => trail.id === +ownProps.match.params.trailId)
  return {trail}
}

export default connect(mapStateToProps, {editTrail})(TrailsEdit);               //in order to actually connect to store we do this
