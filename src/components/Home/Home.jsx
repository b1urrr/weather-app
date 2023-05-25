import React from 'react'

import './home.css'
import MainWeather from '../MainWeather/MainWeather'

const Home = ({weatherData}) => {
  return (
    <div className='w__home section__padding'>
      <div className='w__home_main'>
        <MainWeather weatherData={weatherData} />
      </div>
    </div>
  )
}

export default Home
