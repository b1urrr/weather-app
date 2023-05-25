import { useEffect, useState } from "react";
import "./App.css";
import { Footer, MainWeather, MoreCities, Navbar, Home } from "./components";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("Sofia");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edf8f78a4f9988cc249356922711fae1&units=metric&lang=bg`;
  const getWeather = async () => {
    try {
      const res = await axios.get(url);
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [city]);
  return (
    <>
      <Navbar setCity={setCity} getWeather={getWeather} />
      <Home weatherData={weatherData} />
    </>
  );
}

export default App;
