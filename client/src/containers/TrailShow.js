import React, { Component } from 'react';
import { connect } from 'react-redux';                                          //connects component to redux store provided by provider component 
import { Link } from 'react-router-dom';

import LikeButton from '../components/LikeButton';

import { fetchTrail } from '../actions';
import { deleteTrail } from '../actions';
import { likeTrail } from '../actions';
import { editTrail } from '../actions';

import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';


  class TrailShow extends Component {
    componentDidMount() {
      this.props.fetchTrail(this.props.match.params.trailId);
    }

    handleOnClick = () => {
      this.props.likeTrail(this.props.trail)
    }

    render() {
      let trail = this.props.trail;
      const {deleteTrail, match, history} = this.props;

      return (
      <div className="container-fluid text-center">
          <h1>{trail.name}</h1>
          <h4>Distance:  {trail.distance} miles</h4>
          <Image src={trail.image} width="30%" height="50%" alt="logo" rounded/> <br></br>
          <h4>Description: {trail.description}</h4>
          <ButtonGroup>
            <Button
              bsStyle="danger"
              onClick={() => deleteTrail(trail.id, history)}>
               <span className="glyphicon glyphicon-remove"></span> Delete
            </Button>

            <Button>
              <Link key={trail.id} to={`/trails/${trail.id}/edit`}>
                <span className="glyphicon glyphicon-pencil"></span> Edit Trail
              </Link>
            </Button>

            <LikeButton trail={trail} likeTrail={this.handleOnClick}/>
          </ButtonGroup>
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
