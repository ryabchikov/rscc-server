import React from 'react';

import SatelliteItem from './SatelliteItem';
import './SatelliteList.css';

const SatelliteList = props => {
    // console.log(props);
    if (!props.items) {
        return (
          <h2 className="center">No Satellites</h2>
        );
      }

    return (
      <React.Fragment>
        <h2 className="center">Satellite List</h2>
        <ul className="satellites-list">
          {props.items.map((satellite) => (
            <SatelliteItem
              key={satellite.name}
              name={satellite.name}
            />
          ))}
        </ul>
      </React.Fragment>
    );
};

export default SatelliteList;