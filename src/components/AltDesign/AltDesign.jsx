import React from "react";
import "./altdesign.css";
const AltDesign = ({ weatherData, forecastData }) => {
    
  const hourlyArray = ["1", "2", "3", "4", "5", "6", "7"];
  const months = [
    "Януари",
    "Февруари",
    "Март",
    "Април",
    "Май",
    "Юни",
    "Юли",
    "Август",
    "Септември",
    "Октомври",
    "Ноември",
    "Декември",
  ];
  const date = new Date();
  const today = [
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];
  const { list } = forecastData;
  const { weather, name, main } = weatherData;
  const { description, icon } = weather[0];
  const { temp } = main;
  console.log(today);
  return (
    <div className="w__main">
      <div className="w__main_today">
        <div className="w__main_today-text">
          <div className="w__main_today-datetime">
            <h1>{today[3]}:{today[4]}</h1>
            <p>{today[0]} {months[today[1]]} {today[2]} </p>
          </div>
          <div className="w__main_today-city">
            <h1>{name}</h1>
          </div>
        </div>
        <div className="w__main_today-weather">
          <img src="icons/01d.png" />
          <h1>16°</h1>
        </div>
      </div>
      <div className="w__main_forecast">{hourlyArray.map((i) => {
        const hour = list[i].dt_txt.slice(11, 16);
        return <div key={i} className="w__main_forecast-item">
        <p>{hour}</p>
        <img src={`icons/${list[i].weather[0].icon}.png`} alt="" />
        <p>{Math.round(list[i].main.temp)}°</p></div>
        
      })}</div>
    </div>
  );
};

export default AltDesign;
