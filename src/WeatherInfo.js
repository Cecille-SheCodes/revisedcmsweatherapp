import React from "react";
import "./App.css";
import FormattedDate from "./FormattedDate.js";
import "./Wind.png";

export default function WeatherInfo(props) {
  return (
    <div className="weatherNow">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
      </div>

      <div >
        <span className="Temperature">
          <strong>{Math.round(props.data.temperature)}</strong>
        </span>{" "}
        <span className="units">
          <a href="/">°C</a> | <a href="/">°F</a>
        </span>
      </div>

      <p className="description text-capitalize">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
          alt={props.data.description}
         
        />{" "}
        {props.data.description}
      </p>

      <div className="row ">
        <div className="col-md">
          <p className="humidityWind">
            💧{""} {Math.round(props.data.humidity)}%
          </p>
        </div>
        <div className="col-md">
          <p className="humidityWind">🌬️ {Math.round(props.data.wind)} m/s</p>
        </div>
      </div>
    </div>
  );
}
