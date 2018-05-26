import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class TrailsListItem extends Component {
  render() {
    return(
      <div className="col-sm-6">
        <div className="container-fluid text-center">
          <h3> <Link style={{ marginRight: '12px' }} key={this.props.trail.id} to={`/trails/${this.props.trail.id}`}>{this.props.trail.name}</Link> </h3>
          <h4> Ran {this.props.trail.likes} times! </h4>
          <Image  src={this.props.trail.image} width="250" height="200" alt="logo" rounded/>
          <br></br>
          <br></br>
        </div>
      </div>
    )
  }
}


export default TrailsListItem;
