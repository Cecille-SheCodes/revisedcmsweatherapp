import React from "react";
import "./App.css";
import FormattedDate from "./FormattedDate.js";
import WeatherTemp from "./WeatherTemp.js";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherNow">
      <div className="overview">
        <h1>{props.data.city}</h1>
        <div className="date">
          <FormattedDate coordinates={props.data.coord} />
        </div>
      </div>
      <br />

      <div>
        <WeatherTemp celsius={props.data.temperature} />
      </div>
      <p className="description text-capitalize">
        <img
          src={`https://openweathermap.org/img/wn/${props.data.icon}.png`}
          alt={props.data.description}
        />{" "}
        {props.data.description}{" "}
        <WeatherIcon code={props.data.icon} size={30} color={"white"} />
      </p>

      <div className="row ">
        <div className="col-md">
          <p className="humidityWind">
            💦{""} {Math.round(props.data.humidity)}%
          </p>
        </div>
        <div className="col-md">
          <p className="humidityWind">🌬️ {Math.round(props.data.wind)} m/s</p>
        </div>
      </div>
    </div>
  );
}
