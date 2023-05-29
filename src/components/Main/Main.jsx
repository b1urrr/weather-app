import React from "react";
import "./main.css";
const Main = ({ weatherData, forecastData }) => {
    
  const hourlyArray = ["1", "2", "3", "4", "5"];
  const dailyArray = ["8", "16", "24", "32", "39"];
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
    date.getDay(),
  ];

  if (today[3] < 10) {
    today[3] = '0' + today[3]
    today[3].slice(-2);
  }
  if (today[4] < 10) {
    today[4] = '0' + today[3]
    today[4].slice(-2);
  }

  const { list } = forecastData;
  const { weather, name, main } = weatherData;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;
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
            <p>{description}</p>
          </div>
        </div>
        <div className="w__main_today-weather">
          <img src={`icons/${icon}.png`} />
          <h1>{Math.round(temp)}°</h1>
        </div>
      </div>
      <div className="w__main_forecast">{hourlyArray.map((i) => {
        const hour = list[i].dt_txt.slice(11, 16);
        return <div key={i} className="w__main_forecast-item">
        <p>{hour}</p>
        <img src={`icons/${list[i].weather[0].icon}.png`} alt="" />
        <p>{Math.round(list[i].main.temp)}°</p></div>
        
      })}</div>
      <div className="w__main_forecast">{dailyArray.map((i) => {
        const days = ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота']
        const day = new Date(list[i].dt * 1000)
        const dayOfTheWeek = days[day.getDay()]
        return <div key={i} className="w__main_forecast-item">
        <p>{dayOfTheWeek}</p>
        <img src={`icons/${list[i].weather[0].icon}.png`} alt="" />
        <p>{Math.round(list[i].main.temp)}°</p></div>
        
      })}</div>
    </div>
  );
};

export default Main;
