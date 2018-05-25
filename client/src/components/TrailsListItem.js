import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TrailsListItem extends Component {
  render() {
    return(
      <li>
        <Link style={{ marginRight: '12px' }} key={this.props.trail.id} to={`/trails/${this.props.trail.id}`}>{this.props.trail.name}</Link>
        -Ran {this.props.trail.likes} times!
        <br></br>
        <img src={this.props.trail.image} width="20%" height="50%" alt="logo" />
      </li>
    )
  }
}

export default TrailsListItem;
