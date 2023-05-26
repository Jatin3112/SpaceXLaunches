import './App.css';
import  React, { useEffect, useState } from 'react';

import ListOfSpaceXLaunches from './components/ListOfSpaceXLaunches.jsx';



function App() {

  const [spacexData, setSpacexData] = useState([]);

  const getSpacexData = async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches?limit=100');
    const data = await response.json();
    setSpacexData(data);
  }

  useEffect(() => {
    getSpacexData();
  }, []);

  return (
    <div className="App">

      <h1 className="App-header">SpaceX Launch Programs</h1>
      {spacexData.length >0 && <ListOfSpaceXLaunches spacexData={spacexData} />}


    </div>
  );
}

export default App;
