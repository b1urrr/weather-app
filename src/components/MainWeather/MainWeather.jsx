import "./mainweather.css";

const MainWeather = ({ weatherData }) => {
  return (
    <div className="w__main">
      <div className="w__main_city">
        {/* <h3>В момента</h3> */}
        <h1>{weatherData?.name}</h1>
      </div>
      <div className="w__main_icon">
      
        <img src={`icons/${weatherData?.weather[0].icon}.png`} />
        <h2>
          {Math.round(weatherData?.main.temp)}°<span>C</span>
        </h2>
      </div>
      <div className="w__main_desc">
        <p>{weatherData?.weather[0].description}</p>
        <p>Усеща се като {Math.round(weatherData?.main.feels_like)}°C</p>
      </div>
      <div className="w__main_moredata">
        <div className="w__main_moredata-icons">
          <p>
            <img src="icons/wind.png" /> Вятър:{" "}
            {weatherData?.wind.speed}м/с
          </p>
          <p>
            <img src="icons/humidity.png" /> Влажност:{" "}
            {weatherData?.main.humidity}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainWeather;
