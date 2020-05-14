import React from 'react';

import './SatelliteItem.css';

const SatelliteItem = props => {
    return (
        <div className="satellite-card">
            <p>{props.name}</p>
        </div>
    )
}

export default SatelliteItem;