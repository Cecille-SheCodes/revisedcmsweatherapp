import React from "react";

export default function FormattedDate(props) {
  
  //let timezone = props.timezone;
  let dt = props.timezone;
   let now = new Date();
  let d = now.getTime();
   let nd = new Date(d+ (1000 * dt));

let dateString = nd.toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

let options = { weekday: "short" };
let weekdays = nd.toLocaleDateString(
  "en-US",
  options
);

  let time = nd.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

   return (
     <div>
       {dateString}{""} {weekdays}{""} {time}
     </div>
   );
}
