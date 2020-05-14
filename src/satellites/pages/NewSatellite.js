import React, { useState } from "react";

import axios from '../../shared/util/axios-satellites';

import './NewSatellite.css'

const NewSatellite = (props) => {
  const [satelliteName, setSatelliteName] = useState("");
  const [satelliteDescription, setSatelliteDescription] = useState("");
  const [degrees, setDegrees] = useState("");
  const [hemisphere, setHemisphere] = useState("E");
  const [ band, setBand ] = useState("C");
  const [ power, setPower ] = useState("1");
  const [ coverage, setCoverage ] = useState('');

  const onSatelliteNameChangeHandler = event => {
    setSatelliteName(event.target.value);
  }

  const onSatelliteDescriptionChangeHandler = event => {
    setSatelliteDescription(event.target.value);
  }

  const onDegreesChangeHandler = event => {
    setDegrees(event.target.value);
  }

  const onHemisphereChangeHandler = event => {
    setHemisphere(event.target.value);
  }

  const onBandChangeHandler = event => {
    setBand(event.target.value);
  }

  const onPowerChangeHandler = event => {
    setPower(event.target.value);
  }

  const onCoverageChangeHandler = event => {
    setCoverage(event.target.value);
  }

  const onNewSatelliteSubmitHandler = () => {
    const satellite = {
      name: satelliteDescription,
      position: {
        degrees: degrees,
        hemisphere: hemisphere
      }
    }
    // console.log(satellite)
    axios.put('/satellites/' + satelliteName + '.json', satellite)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h2 className="center">Add New Satellite</h2>
      <div className="input-field">
        <label>
          Set Satellite Name:
          <input  type="text" placeholder="Satellite Name" value={satelliteName} onChange={onSatelliteNameChangeHandler}/>
        </label>
      </div>
      <div className="input-field">
        <label>
          Set Satellite Description:
          <input  type="text" placeholder="Description" value={satelliteDescription} onChange={onSatelliteDescriptionChangeHandler}/>
        </label>
      </div>
      <div className="input-field">
        <label>
          Set Position Degrees:
          <input  type="text" placeholder="Position" value={degrees} onChange={onDegreesChangeHandler}/>
        </label>
      </div>
      <div className="input-field">
        <label>
          Set Hemisphere:
          <select value={hemisphere} onChange={onHemisphereChangeHandler}>
            <option value="E">Eastern</option>
            <option value="W">Western</option>
          </select>
        </label>
      </div>
      <div className="input-field">
        <label>
          Choose a band 
          <select value={band} onChange={onBandChangeHandler}>
            <option value="C">C-band</option>
            <option value="Ku">Ku-band</option>
            <option value="Ka">Ka-band</option>
          </select>
        </label>
      </div>
      <div className="input-field">
        <label>
          Choose a power 
          <select value={power} onChange={onPowerChangeHandler}>
            <option value="1">1 dB</option>
            <option value="2">2 dB</option>
            <option value="3">3 dB</option>
            <option value="4">4 dB</option>
            <option value="5">5 dB</option>
            <option value="6">6 dB</option>
            <option value="7">7 dB</option>
            <option value="8">8 dB</option>
            <option value="9">9 dB</option>
            <option value="10">10 dB</option>
          </select>
        </label>
      </div>
      <div>
        <textarea
          className="input-field"
          type="text"
          rows="10"
          placeholder="Coverage"
          value={coverage}
          onChange={onCoverageChangeHandler}
        />
      </div>
      <div>
        <button className="submit-satellite-button-box" type="submit" onClick={onNewSatelliteSubmitHandler}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default NewSatellite;
