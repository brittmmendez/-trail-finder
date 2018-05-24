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
        <div className='TrailShow'>
          {trail ? (
            <div>
              <h1 className='trailName'>{trail.name}</h1>
              <h3><p>Distance: <br></br>{trail.distance}</p></h3>
              <h3><p>Description: <br></br>{trail.description}</p></h3>
            </div>
          ) : (
            <p>Loading</p>
          )}
          <br></br>
          <button onClick={() => deleteTrail(trail.id, history)}>
            Delete
          </button>
          {trail ? <LikeButton trail={trail} likeTrail={this.handleOnClick}/> : 'some error happened'}
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
