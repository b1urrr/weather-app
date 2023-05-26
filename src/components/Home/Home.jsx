import React from 'react'

import './home.css'
import MainWeather from '../MainWeather/MainWeather'
import Forecast from '../Forecast/Forecast'

const Home = ({weatherData, forecastData}) => {
  return (
    <div className='w__home section__padding'>
      <div className='w__home_main'>
        <MainWeather weatherData={weatherData} />
        <Forecast forecastData={forecastData} />
      </div>
    </div>
  )
}

export default Home
