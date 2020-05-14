import React, { useState, useEffect } from "react";

import BeamList from "../components/BeamList";
import axios from "../../shared/util/axios-satellites";

const Beams = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('/beams.json',);
        setData(result.data);
      };
  
      fetchData();
    }, []);

    return <BeamList items={Object.values(data)} />;
  };

export default Beams;
