import React from 'react';

import './BeamItem.css';

const BeamItem = props => {
    return (
        <div className="Beam-card">
            <p>{props.satellite} {props.name} </p>
        </div>
    )
}

export default BeamItem;