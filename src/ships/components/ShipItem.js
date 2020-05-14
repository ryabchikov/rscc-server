import React , { useState } from 'react';

import Map from '../../shared/components/UIElements/Map';
import Modal from '../../shared/components/UIElements/Modal';

import './ShipItem.css';


const ShipItem = props => {
    const [showMap, setShowMap] = useState(false);
    const [showDescriptionModal, setShowDescriptionModal] = useState(false);

    // const showDescriptionHandler = () => {
    //     setShowDescriptionModal(true);
    // }

    const openMapHandler = () => setShowMap(true);

    const closeMapHandler = () => setShowMap(false);

    const cancelShowDescriptionHandler = () => {
        setShowDescriptionModal(false);
    }

    return (
      <React.Fragment>
        <p>{props.title}</p>
        <Modal
          show={showMap}
          onCancel={closeMapHandler}
          header={props.title}
          contentClass="ship-item__modal-content"
          footerClass="ship-item__modal-actions"
          footer={<button onClick={closeMapHandler}>CLOSE</button>}
        >
          <div className="map-container">
            <Map center={props.coordinates} zoom={3} />
          </div>
        </Modal>
        <Modal
          show={showDescriptionModal}
          onCancel={cancelShowDescriptionHandler}
          header="Ship description"
          footerClass="ship-item__modal-actions"
          footer={
            <React.Fragment>
              <p>{props.description}</p>
              <buttton onClick={cancelShowDescriptionHandler}>CLOSE</buttton>
            </React.Fragment>
          }
        ></Modal>
        <button onClick={openMapHandler}>SHOW ON MAP</button>
      </React.Fragment>
    );
}

export default ShipItem;