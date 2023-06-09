import { useEffect, useState } from "react";
import "./App.css";
import { Footer, MoreCities, Navbar, Main, Home } from "./components";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [forecastData, setForecastData] = useState();
  const [city, setCity] = useState("Sofia");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=edf8f78a4f9988cc249356922711fae1&units=metric&lang=bg`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=edf8f78a4f9988cc249356922711fae1&units=metric&lang=bg`;
  const getWeather = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get(url);
      setWeatherData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getForecast = async () => {
    try {
      const res = await axios.get(forecastUrl);
      setForecastData(res.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  };
  
  useEffect(() => {
    
    getWeather();
    getForecast();
   
  }, [city]);
  console.log(forecastData);

  if(isLoading) {
    return (<>
      <Navbar setCity={setCity} />
    </>)}

  return (
    <>
      <Navbar setCity={setCity} />
      <Home weatherData={weatherData} forecastData={forecastData} />
    </>
  );
}

export default App;
