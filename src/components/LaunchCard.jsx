import React from "react";
import "./LaunchCard.css";

function LaunchCard({launchData}) {

   
    return(
        <div className="Card">
            <div className="cardItem">
                <img className="img" src={launchData.links.mission_patch_small} alt="mission patch" />
                <h1 className="text name">{launchData.mission_name}{" #"}{launchData.flight_number}</h1>
                
                <p className="text">Mission Ids : {launchData.mission_id}</p>
                <p className="text">Launch Year : {launchData.launch_year}</p>
                <p className="text">Successful Launch : {launchData.launch_success.toString()}</p>
                <p className="text">Successful Landing : {(launchData.rocket.first_stage.cores[0].land_success) !== null ? launchData.rocket.first_stage.cores[0].land_success.toString() : null }</p>
                
            </div>
        </div>
    )
}


export default LaunchCard;


// data.filter(v => v.text !== null).map((name, textIndex) => { ...