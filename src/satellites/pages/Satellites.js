import React, { useState, useEffect } from "react";

import SatelliteList from "../components/SatelliteList";
import axios from "../../shared/util/axios-satellites";

const Satellites = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('/satellites.json',);
        setData(result.data);
      };
  
      fetchData();
    }, []);
  
    // console.log(Object.values(data).map(satellite => satellite.name));

    return <SatelliteList items={Object.values(data)} />;
  };

export default Satellites;
