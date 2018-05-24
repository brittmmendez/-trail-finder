import React from 'react';
import { Link } from 'react-router-dom';
import TrailsListItem from './TrailsListItem'

const TrailsList = ({ trails }) => {
  const renderTrails = trails.map(trail =>
     <TrailsListItem trail={trail} />
  );

  return (
    <div>
      {renderTrails}
    </div>
  );
};

export default TrailsList;
