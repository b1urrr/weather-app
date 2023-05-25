import "./mainweather.css";

const MainWeather = ({ weatherData }) => {
  return (
    <div className="w__main">
      <div className="w__main_city">
        <h3>В момента</h3>
        <h1>{weatherData?.name}</h1>
      </div>
      <div className="w__main_icon">
        <img src={`src/assets/icons/${weatherData?.weather[0].icon}.png`} />
        <h2>{Math.round(weatherData?.main.temp)}°<span>C</span></h2>
      </div>
      <div className="w__main_desc">
        <p>{weatherData?.weather[0].description}</p>
        <p>Усеща се като {Math.round(weatherData?.main.feels_like)}°C</p>
      </div>
      <div className="w__main_moredata">
        <p>Вятър: {weatherData?.wind.speed}м/с</p>
        <p>Влажност: {weatherData?.main.humidity}%</p>
        <p>Атмосферно налягане: {weatherData?.main.pressure}hPa</p>
      </div>
    </div>
  );
};

export default MainWeather;
