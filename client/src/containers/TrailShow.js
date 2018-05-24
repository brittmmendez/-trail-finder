import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrail } from '../actions';
import { deleteTrail } from '../actions';
import LikeButton from '../components/LikeButton';
import { likeTrail } from '../actions';

  class TrailShow extends Component {

    handleOnClick = () => {
      this.props.likeTrail(this.props.trail[0])
    }

    componentDidMount() {
      this.props.fetchTrail(this.props.match.params.trailId);
    }

    render() {
      let trail = this.props.trail[0];
      const {deleteTrail, history} = this.props;

      return (
        <div>
          <LikeButton trail={trail} likeTrail={this.handleOnClick}/>
          <h1>{trail.name}</h1>
          <h3>Distance: {trail.distance} miles</h3>
          <h3>Description: {trail.description}</h3>
          <button onClick={() => deleteTrail(trail.id, history)}> Delete </button>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return ({
      trail: state.trails
    })
  }

  export default connect(mapStateToProps, {fetchTrail, deleteTrail, likeTrail})(TrailShow);
