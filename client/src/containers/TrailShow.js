import React from 'react';
import { connect } from 'react-redux';
import { likeTrail } from '../actions';
import { deleteTrail } from '../actions';


const TrailShow = ({ trail }) =>
  <div>
    <h2>Title: {trail.name}</h2>
    <h3>Distance: {trail.distance} miles</h3>
    <h3>Description: {trail.description}</h3>
    <button onClick={() => deleteTrail(trail.id)}> Delete </button>
  </div>

    // <div>Likes: {trail.likes}</div>
    // <button
    //   type="button"
    //   onClick={() => this.props.likeTrail(trail)}
    //   className="btn btn-primary"
    //   >
    //   Like!
    // </button>

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const trail = state.trails.find(trail => trail.id == ownProps.match.params.trailId)

  if (trail) {
    return { trail }
  } else {
    return { trail: {} }
  }
}


export default connect(mapStateToProps, {likeTrail, deleteTrail})(TrailShow);
