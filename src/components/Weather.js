import React from 'react'

const Weather =({capital,weather})=>{
    return(
        <>
            <p><b>temperature:</b> {weather.current.temperature} Celsius</p>
            <img src = {weather.current.weather_icons} alt ={`${capital}'s weather forecast`} style={{height:100}}/>
            <p><b>wind:</b> {weather.current.wind_speed} mph {weather.current.wind_degree} {weather.current.wind_dir}</p>
        </>
    )
}

export default Weather;