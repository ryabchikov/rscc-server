import React, { useState, useEffect } from "react";

import axios from '../../shared/util/axios-satellites';

import './NewSatellite.css'

const NewBeam = (props) => {
  const [satellite, setSatellite] = useState("");
  const [name, setName] = useState("");
  const [band, setBand] = useState("C");
  const [fixed, setFixed] = useState(true);
  const [power, setPower] = useState("1");
  const [coverage, setCoverage] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/satellites.json");
      setData(result.data);
    };

    fetchData();
  }, []);

  const onBandChangeHandler = (event) => {
    setBand(event.target.value);
  };

  const onPowerChangeHandler = (event) => {
    setPower(event.target.value);
  };

  const onCoverageChangeHandler = (event) => {
    setCoverage(event.target.value);
  };

  const onSatelliteChangeHandler = (event) => {
    setSatellite(event.target.value);
  };

  const onBeamNameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onFixedChangeHandler = (event) => {
    setFixed(event.target.value);
  };

  const onNewBeamSubmitHandler = () => {
    const beam = {
      id: satellite + name + band + power + "dB",
      satellite: satellite,
      name: name,
      band: band,
      power: power,
      fixed: fixed
    };
    console.log(beam);
    axios
      .put("/beams/" + satellite + name + band + power + "dB.json", beam)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className="input-field">
        <label>
          Choose a Satellite
          <select value={satellite} onChange={onSatelliteChangeHandler}>
            {Object.values(data).map((sat) => (
              <option key={sat.id} value={sat.id}>{sat.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="input-field">
        <label>
          Set Beam Name:
          <input  type="text" placeholder="Name" value={name} onChange={onBeamNameChangeHandler}/>
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
          Choose if steerable 
          <select value={fixed} onChange={onFixedChangeHandler}>
            <option value={true}>Fixed</option>
            <option value={false}>Steerable</option>
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
        <button
          className="submit-satellite-button-box"
          type="submit"
          onClick={onNewBeamSubmitHandler}
        >
          SUBMIT
        </button>
      </div>
    </React.Fragment>
  );
};

export default NewBeam;
