import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrail } from '../actions';
import { deleteTrail } from '../actions';
import LikeButton from '../components/LikeButton';
import { likeTrail } from '../actions';

  class TrailShow extends Component {
    componentDidMount() {
      this.props.fetchTrail(this.props.match.params.trailId);
    }

    handleOnClick = () => {
      this.props.likeTrail(this.props.trail)
    }

    render() {
      let trail = this.props.trail;
      const {deleteTrail, history} = this.props;

      return (
        <div>
          <h1>{trail.name}</h1>
          <h4>Distance:{trail.distance} miles</h4>
          <h4>Description: {trail.description}</h4>
          <img src={trail.image} width="20%" height="50%" alt="logo" /> <br></br>
          <LikeButton trail={trail} likeTrail={this.handleOnClick}/>
          <button onClick={() => deleteTrail(trail.id, history)}> Delete </button>
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return ({
      trail: state.trails.trail
    })
  }

  export default connect(mapStateToProps, {fetchTrail, deleteTrail, likeTrail})(TrailShow);
