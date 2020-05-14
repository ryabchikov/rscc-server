import React, { useState, useEffect } from 'react';

import ShipList from '../components/ShipList';
import axios from '../../shared/util/axios-satellites';

const Ships = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/ships.json',);
      setData(result.data);
    };

    fetchData();
  }, []);

  return <ShipList items={data} />;
};

export default Ships;