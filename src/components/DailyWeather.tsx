import React from "react";
import "../App.css";
export default function DailyWeather({ source }: any) {

  const iconUrl = "https://www.weatherbit.io/static/img/icons/";

  const index = {
    datetime: 400,
    app_max_temp: "max",
    app_min_temp: "min",
    weather: {icon:"c01d"}
  }

    if (source === 0 ) {
      source = index
    }

    var dateTime = new Date(source.datetime)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Day"];

  return (
    <div className="daily-component">
    <p className="temp-tex">{source.datetime === 400? "Day": days[dateTime.getDay()]}</p>
      <p className="temp-tex">{source.app_max_temp} °</p>
      <img
        src={iconUrl + source.weather.icon + ".png"}
        className="daily-icon" alt="Icon for the weather"
      />
        <p className="temp-tex">{source.app_min_temp} °</p>
    </div>
  );
}
