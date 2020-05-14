import React, { useState, useEffect } from "react";

import axios from '../../shared/util/axios-satellites';

import './NewSatellite.css'

const NewBeam = (props) => {
  const [satellite, setSatellite] = useState("");
  const [band, setBand] = useState("C");
  const [power, setPower] = useState("1");
  const [coverage, setCoverage] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/satellites.json");
      setData(result.data);
    };

    fetchData();
  }, []);

  console.log(data);

  const onNewBeamSubmitHandler = (event) => {
    console.log("submitted");
  };

  const onCoverageChangeHandler = (event) => {
    setCoverage(event.target.value);
  };

  const onSatelliteChangeHandler = (event) => {
    setSatellite(event.target.value);
    console.log(satellite)
  };

  //   const onNewSatelliteSubmitHandler = () => {
  //     const satellite = {
  //       name: satelliteDescription,
  //       position: {
  //         degrees: degrees,
  //         hemisphere: hemisphere
  //       }
  //     }
  //     axios.put('/satellites/' + satelliteName + '.json', satellite)
  //       .then(response => console.log(response))
  //       .catch(error => console.log(error));
  //   }

  return (
    <React.Fragment>
      <div className="center">
        <label>
          Choose a Satellite
          <select value={power} onChange={onSatelliteChangeHandler}>
            {Object.values(data).map((satellite) => (
              <option key={satellite.id} value={satellite.id}>{satellite.name}</option>
              //   <SatelliteItem key={satellite.name} name={satellite.name} />
            ))}
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
