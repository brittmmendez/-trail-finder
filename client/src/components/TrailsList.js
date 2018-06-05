import React from 'react';
import { Link } from 'react-router-dom';
import TrailsListItem from './TrailsListItem'
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { getComments } from '../actions';

const TrailsList = ({ trails }) => {
  const orderTrails = trails.trails.sort(function(a, b) {
          return b.likes - a.likes;
        })
  const renderTrails = orderTrails.map(trail =>
     <TrailsListItem trail={trail}  key={trail.id}/>

  );

  let randomTrail = trails.trails[Math.floor(Math.random() * trails.trails.length)];
  let id = randomTrail? randomTrail.id : 1

  return (
    <div>
      <div className="container-fluid text-center">
        <Link to={`/trails/${id}`}>
          <Button bsSize="large" className="btn btn-info">
            CLICK ME<br></br> For A Random Trail!
          </Button>
        </Link>
      </div>

      <div className="container">
        <div className="row">
          {renderTrails}
        </div>
      </div>
    </div>
  );
};

export default TrailsList;
