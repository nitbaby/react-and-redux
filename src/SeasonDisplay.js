import React from 'react';
import './SeasonDisplay.css'
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    icon: "sun"
  },
  winter: {
    text: "Burr, it is chilly",
    icon: "snowflake"
  }
}
const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return (lat > 0) ? "summer" : "winter"
  } else {
    return (lat > 0) ? "winter" : "summer"
  }
}
const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, icon} = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${icon} icon massive icon-left`}></i>
      <h1>{text}</h1>
      <i className={`${icon} icon massive icon-right`}></i>
    </div>
  );
};

export default SeasonDisplay;
