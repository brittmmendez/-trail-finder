import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component
import { Link } from 'react-router-dom';

import LikeButton from '../components/LikeButton';
import CommentsList from '../components/CommentsList';
import CommentsNew from './CommentsNew';

import { deleteTrail } from '../actions';
import { likeTrail } from '../actions';
import { editTrail } from '../actions';
import { getComments } from '../actions';

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


class TrailShow extends Component {

  componentDidMount() {
    this.props.getComments(this.props.match.params.trailId);
  }

  handleOnClick = () => {
    this.props.likeTrail(this.props.trail)
  }

  render() {
    const { trail, deleteTrail, match, history } = this.props;
    return (
      <div className="container-fluid text-center">
          <h1>{trail.name}</h1>

          <h4>Distance:  {trail.distance} miles</h4>

          <h4>Description: {trail.description}</h4>

          <Image src={trail.image} width="30%" height="50%" alt="logo" rounded/> <br></br>

          <ButtonGroup>
            <Button
              className="btn btn-outline-danger"
              onClick={() => deleteTrail(trail.id, history)}>
               <span className="glyphicon glyphicon-remove"></span> Delete
            </Button>

            <Button className="btn btn-outline-secondary">
              <Link key={trail.id} to={`/trails/${trail.id}/edit`}>
                <span className="glyphicon glyphicon-pencil"></span> Edit Trail
              </Link>
            </Button>

            <LikeButton trail={trail} likeTrail={this.handleOnClick}/>
          </ButtonGroup>

          <br></br>
          <br></br>
          <CommentsNew trailId={this.props.match.params.trailId}/>

          <CommentsList comments={this.props.comments} />
        </div>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const id = +ownProps.match.params.trailId
    const trail = state.trails.trails.find(trail => trail.id === id) || {}
    return ({
      trail: trail,
      comments: state.comments.comments
    })
  }

  export default connect(mapStateToProps, {getComments, deleteTrail, likeTrail})(TrailShow);
