import "./App.css";
import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
 
  function showFahrenheit(event) {
    event.preventDefault();
   setUnit("fahrenheit");
 }
 function showCelsius(event) {
   event.preventDefault();
   setUnit("celsius");
 }

 function fahrenheit(){
    return ((props.celsius * 9/5)+ 32);
 }

if (unit === "celsius") {
  return (
    <div>
      <span className="Temperature">
        <strong>{Math.round(props.celsius)}</strong>
      </span>{" "}
      <span className="units">
        °C |{" "}
        <a href="/" onClick={showFahrenheit}>
          °F
        </a>
      </span>
    </div>
  );
} else {
  return (
    <div>
      <span className="Temperature">
        <strong>{Math.round(fahrenheit())}</strong>
      </span>{" "}
      <span className="units">
        °F{" "}
        | <a href="/" onClick={showCelsius}>
          °C
        </a>
      </span>
    </div>
  );
}
}
