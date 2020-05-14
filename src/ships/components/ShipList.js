import React from 'react';

import ShipItem from './ShipItem';

const ShipList = (props) => {
  console.log(props)
  if (!props.items) {
    return (
      <h2 className="center">No Ships</h2>
    );
  }
  
  return (
    <React.Fragment>
      <h2 className="center">Ships Page</h2>
      <ul>
        {props.items.map((ship) => (
          <ShipItem
            key={ship.id}
            id={ship.id}
            title={ship.title}
            description={ship.description}
            coordinates={ship.location}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ShipList;