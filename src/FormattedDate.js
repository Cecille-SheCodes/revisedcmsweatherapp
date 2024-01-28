import React from "react";

export default function FormattedDate(props) {
  
  let timezone = props.timezone;
  let now = new Date();
  let d = now.getTime();
  let nd = new Date(d + 1000 * timezone);
let dateString = nd.toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
let options = { weekday: "long" };
let weekdays = nd.toLocaleDateString(
  "en-US",
  options
);
  let time = nd.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });


  let timezoneOffset = props.timezone;
 let currentDate = new Date();
    let currentTimezoneOffset = currentDate.getTimezoneOffset() * 60; // Convert minutes to seconds
   let currentTimestamp = currentDate.getTime() / 1000; // Convert milliseconds to seconds
   let timezoneTime = currentTimestamp + timezoneOffset + currentTimezoneOffset;

   // Convert the timezone time into a human-readable format
 




  return (
    <div>
       {dateString} <br />
       {weekdays}{" "}{time} 
    </div>
  );
}
