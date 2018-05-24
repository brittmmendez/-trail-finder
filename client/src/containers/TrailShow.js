import React from 'react';
import { connect } from 'react-redux';
import { likeTrail } from '../actions';

const TrailShow = ({ trail }) =>
  <div>
    <h2>Title: {trail.name}</h2>
    <h3>Title: {trail.distance}</h3>
    <h3>Title: {trail.description}</h3>

    <button
      type="button"
      onClick={() => likeTrail(trail.id)}
      className="btn btn-primary"
      >
      Like!
    </button>

    <div>Votes: {trail.votes}</div>
    
  </div>

const mapStateToProps = (state, ownProps) => {
  // eslint-disable-next-line
  const trail = state.trails.find(trail => trail.id == ownProps.match.params.trailId)

  if (trail) {
    return { trail }
  } else {
    return { trail: {} }
  }
}


export default connect(mapStateToProps, {likeTrail})(TrailShow);
