import React from "react";

import "./forecast.css";

const Forecast = ({ forecastData }) => {
  const hourlyArray = ["1", "2", "3", "4", "5", "6"];
  return (
    <div className="w__forecast">
      {hourlyArray.map((i) => {
        const date = `${forecastData?.list[i].dt_txt.slice(
          8,
          10
        )}.${forecastData?.list[i].dt_txt.slice(
          5,
          7
        )}.${forecastData?.list[i].dt_txt.slice(0, 4)}`;
        const hour = forecastData?.list[i].dt_txt.slice(11, 16);
        console.log(forecastData?.list[i].weather[0].icon)
        return (
          <div key={i}>
            <p>{hour}</p>
            <p>{date}</p>
            <img className="w__forecast_main-img"
              src={`src/assets/icons/${forecastData?.list[i].weather[0].icon}.png`}
            />
            {/* <p id="desc">{forecastData?.list[i].weather[0].description}</p> */}
            <h4>{Math.round(forecastData?.list[i].main.temp)}°C</h4>
            <p id="feels_like">Усеща се: {Math.round(forecastData?.list[i].main.feels_like)}°C</p>
            <div className="w__forecast_icons"><p><img src="src/assets/icons/wind.png" /> {forecastData?.list[i].wind.speed} м/с</p>
            <p><img src="src/assets/icons/humidity.png" /> {forecastData?.list[i].main.humidity}%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
