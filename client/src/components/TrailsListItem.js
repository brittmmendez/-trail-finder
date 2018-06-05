import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { likeTrail } from '../actions';
import LikeButton from './LikeButton';

class TrailsListItem extends Component {

  handleOnClick = () => {
    this.props.likeTrail(this.props.trail)
   }

  render() {
    return(
      <div className="col-sm-4" style={{ marginTop: '30px' }}>
        <div className="container-fluid text-center">
          <h3> <Link key={this.props.trail.id} to={`/trails/${this.props.trail.id}`}>{this.props.trail.name}</Link> </h3>
          <h4> Ran {this.props.trail.likes} times! </h4>
          <Image  src={this.props.trail.image} width="250" height="200" alt="logo" rounded/>
          <br></br>
          <LikeButton trail={this.props.trail} likeTrail={this.handleOnClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    trails: state.trails
  }
 }
export default connect(mapStateToProps, {likeTrail})(TrailsListItem);
