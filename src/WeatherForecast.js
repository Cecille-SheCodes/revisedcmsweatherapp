import "./WeatherForecast.css";
import React, {useState, useEffect} from "react";

import DailyForecast from "./DailyForecast";
import axios from "axios";


export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
  
useEffect (() =>{
    setLoaded(false);},
    [props.coordinates]);


function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
        }



  if (loaded){
    return(
       <div className="Forecast">
        <div className="row">
         
    {forecast.map(function(dayForecast,index) {
    if (index < 5) {
        return (
        <div className="col"key={index}> 
        <DailyForecast data={dayForecast} />
        </div> 
          );}
        
        else {
              return null;
            }
        })}
  </div>
  </div>);
}

else {
   
let apikey =
    "72bb9dab46b9ec3d65f423c63f27a9b8";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;
  
  axios.get(url).then(handleResponse);
return(null);
}
}