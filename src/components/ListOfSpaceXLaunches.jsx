import React, {useState} from "react";
import "./ListOfSpaceXLaunches.css"


import LaunchCard from "./LaunchCard.jsx";


function ListOfSpaceXLaunches({spacexData}) {
    // console.log(spacexData[0].launch_success);

    
    const [spaceData, setSpaceData] = useState(spacexData)
    

    function handleClick(e) {
        const year = e.target.innerText;
        setSpaceData(spacexData.filter(launchYear => launchYear.launch_year === year));
        
    }
    function handleLaunch(e) {
        const launch = e.target.innerText;
        setSpaceData(spacexData.filter(launched => launched.launch_success.toString() === launch));
        
        
    }
    function handleLand(e) {
        const land = e.target.innerText;
        setSpaceData(spacexData.filter((landed) => (landed.rocket.first_stage.cores[0].land_success) !== null ? landed.rocket.first_stage.cores[0].land_success.toString() === land : null));
    }

    
    return (
        <>
        <div className="container">
            <div className="">
                
                <div className="filters">
                    <h2 className="title">Filters</h2>
                    <hr />
                    <div className="filter-details">
                        <h3 className="title">Launch Year</h3>
                        <button className="btn" onClick={handleClick}>2006</button>
                        <button className="btn" onClick={handleClick}>2007</button>
                        <button className="btn" onClick={handleClick}>2008</button>
                        <button className="btn" onClick={handleClick}>2009</button>
                        <button className="btn" onClick={handleClick}>2010</button>
                        <button className="btn" onClick={handleClick}>2011</button>
                        <button className="btn" onClick={handleClick}>2012</button>
                        <button className="btn" onClick={handleClick}>2013</button>
                        <button className="btn" onClick={handleClick}>2014</button> 
                        <button className="btn" onClick={handleClick}>2015</button>
                        <button className="btn" onClick={handleClick}>2016</button>
                        <button className="btn" onClick={handleClick}>2017</button>
                        <button className="btn" onClick={handleClick}>2018</button>
                        <button className="btn" onClick={handleClick}>2019</button>
                        <button className="btn" onClick={handleClick}>2020</button>
                    </div>
                    <hr />
                    <div className="filter-details">
                        <h3 className="title">Successful Launch</h3>
                        <button className="btn" onClick={handleLaunch}>true</button>
                        <button className="btn" onClick={handleLaunch}>false</button>
                    </div>
                    <hr />
                    <div className="filter-details">
                        <h3 className="title">Successful Landing</h3>
                        <button className="btn" onClick={handleLand}>true</button>
                        <button className="btn" onClick={handleLand}>false</button>
                    </div>
                    <hr />
                </div>
            </div>
            

            
            <div className="row"> 
                {spaceData.map(data => (
                    <LaunchCard launchData={data} key={data.flight_number} />
            ))}
            </div>
           
        </div>
            
        <h2 className="developer">Developed By:Jatin</h2>
        </>
    )
}

export default ListOfSpaceXLaunches;