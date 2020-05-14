import React from 'react';

import BeamItem from './BeamItem';
import './BeamList.css';

const BeamList = props => {
    // console.log(props);
    if (!props.items) {
        return (
          <h2 className="center">No Beams</h2>
        );
      }

    return (
      <React.Fragment>
        <h2 className="center">Beam List</h2>
        <ul className="Beams-list">
          {props.items.map((Beam) => (
            <BeamItem
              key={Beam.id}
              name={Beam.name}
              satellite={Beam.satellite}
            />
          ))}
        </ul>
      </React.Fragment>
    );
};

export default BeamList;