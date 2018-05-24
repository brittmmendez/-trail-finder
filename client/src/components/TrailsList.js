import React from 'react';
import { Link } from 'react-router-dom';

const TrailsList = ({ trails }) => {
  const renderTrails = trails.map(trail =>
    <li> <Link style={{ marginRight: '12px' }} key={trail.id} to={`/trails/${trail.id}`}>{trail.name}</Link> </li>
  );

  return (
    <div>
      {renderTrails}
    </div>
  );
};

export default TrailsList;
