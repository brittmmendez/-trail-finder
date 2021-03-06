import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import { createComment } from '../actions';
import { Button } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';

class CommentsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
      trail_id: +this.props.trailId
    };
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      comment: ''
    });
  }

  render(){
    return (
      <div className="container-fluid text-center" style={{width: 600}}>
      <ListGroupItem >
        <h1> Run Log </h1>
        <form onSubmit={this.handleOnSubmit} >
          <input
            className="form-control"
            style={{ border: 'none' }}
            type="text"
            name="comment"
            placeholder="Add Run Notes to Log"
            value={this.state.comment}
            onChange={this.handleOnChange}
          />

          <Button className="btn btn-outline-primary" type="submit"> <span className="glyphicon glyphicon-ok"></span> Add Comment </Button>
        </form>
        </ListGroupItem>
        </div>
    );
  }
}

export default connect(null, { createComment })(CommentsNew)
