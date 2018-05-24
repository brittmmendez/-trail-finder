import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TrailsListItem extends Component {
  render() {
    return(
      <li> <Link style={{ marginRight: '12px' }} key={this.props.trail.id} to={`/trails/${this.props.trail.id}`}>{this.props.trail.name}</Link> </li>
    )
  }
}

export default TrailsListItem;
