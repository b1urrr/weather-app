import React from 'react'

import './home.css'
import Main from '../Main/Main'

const Home = ({weatherData, forecastData}) => {
  return (
    <div className='w__home section__padding'>
      <div className='w__home_main'>
        <Main weatherData={weatherData} forecastData={forecastData} />
      </div>
    </div>
  )
}

export default Home
