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
        <p className="text-capitalize">
          <img
            src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
            alt={props.data.description}
            className="float-right"
          />{" "}
          {props.data.description}
        </p>
      </div>

      <div className="container">
       
          <span className="Temperature">
            <strong>{Math.round(props.data.temperature)}</strong>
       
        </span>{" "}
        <span className="units">
          <a href="/">°C</a> | <a href="/">°F</a>
        </span>
      </div>

      <div className="container">
        <p>
          💧{""} {Math.round(props.data.humidity)}%
          {"   "}
           🌬️{" "}{Math.round(props.data.wind)} m/s
        </p>
      </div>
    </div>
  );
}
