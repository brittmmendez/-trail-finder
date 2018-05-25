import React, { Component } from 'react';

class LikeButton extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.likeTrail}>Run Counter: { this.props.trail.likes}</button> 
      </div>
    )
  }
}

export default (LikeButton);
