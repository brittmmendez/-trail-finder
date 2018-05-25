import React from 'react';
import { Link } from 'react-router-dom';
import TrailsListItem from './TrailsListItem'
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const TrailsList = ({ trails }) => {
  const orderTrails = trails.sort(function(a, b) {
          return b.likes - a.likes;
        })
  const renderTrails = orderTrails.map(trail =>
     <TrailsListItem trail={trail}  key={trail.id}/>

  );

  let num = trails[Math.floor(Math.random() * trails.length)];
  let id = num? num.id : 1

  return (
    <div>
      <div className="container-fluid text-center">
        <Button bsSize="large">
          <Link
            style={{ marginRight: '12px' }}
            to={`/trails/${id}`}>
            CLICK ME<br></br> For A Random Trail!
          </Link>
        </Button>
      </div>

      <div class="container">
        <div class="row">
          {renderTrails}
        </div>
      </div>
    </div>
  );
};

export default TrailsList;
