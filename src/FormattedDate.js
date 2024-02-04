import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FormattedDate(props) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    let apikey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

    axios
      .get(url)
      .then(handleResponse)
      .then((data) => setFormattedDate(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log(response.data.timezone_offset);
    let now = new Date();
    let localOffset = now.getTimezoneOffset() * 60000;
    let d = now.getTime() + localOffset;
    let nd = new Date(d + 1000 * response.data.timezone_offset);

    let dateString = nd.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    let options = { weekday: "short" };
    let weekdays = nd.toLocaleDateString("en-US", options);

    let time = nd.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div>
        {dateString}
        {""} {weekdays}
        {""} {time}
      </div>
    );
  }

  return formattedDate;
}
