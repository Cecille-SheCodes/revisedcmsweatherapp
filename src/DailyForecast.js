
import React from "react";
import WeatherIcon from "./WeatherIcon";

  export default function DailyForecast(props) {
    function WeekDay() {
     
      //let date = new Date(props.data.dt * 1000);
      //let day = date.getDay();
      //let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      //return days[day];
let now = new Date();
let utc = now.getTime();
let dt = props.data.dt; // Time difference in seconds between the city and UTC

let cityTime = new Date(utc + dt * 1000);
let options = { weekday: "short" };
let dayOfWeek = cityTime.toLocaleDateString(undefined, options);

return(dayOfWeek);
    }
  

    return (
      <div>
        <div className="DayForecast">{WeekDay()}</div>
        <WeatherIcon
          code={props.data.weather[0].icon}
          size={25}
          color={"white"}
        />
        <div className="TemperatureRange">
          <span className="MinTemp">{Math.round(props.data.temp.min)}°</span>{" "}
          <span className="MaxTemp">{Math.round(props.data.temp.max)}°</span>
        </div>
      </div>
    );
  }