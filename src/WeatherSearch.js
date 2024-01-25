import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e41d480a236e63c3ed66acc7310d68f6&units=metric`;
    axios
      .get(url)
      .then((response) => {
        setLoaded(true);
        setWeather({
          date: new Date(response.data.dt * 1000),
          city: response.data.name,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          wind: response.data.wind.speed,
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-3 ">
      <h1>
        <input
          className="input"
          onChange={updateCity}
          type="search"
          placeholder="&#128269; Type City"
          autoFocus="on"
        />

        <input
          type="submit"
          value="Search"
          onClick={handleSubmit}
          className="btn btn-primary"
        />
      </h1>
    </form>
  );

  if (loaded && weather) {
    return (
      <div>
        {form}
        <br />
        <WeatherInfo data={weather} />
      </div>
    );
  } else {
    
    return (
      <div>
        {form}
        <p>Please provide a valid city name. </p>
      </div>
    );
  }
}
