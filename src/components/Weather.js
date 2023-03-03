import React from 'react';
import './styles.css';



    const CardExampleCard = ({weatherData}) => (

        <div className="main">
            <p className="header">{weatherData.name}</p>
            <div className="flex-container">
                <p className="temp">Temprature: {weatherData.main.temp}</p>
                <p className="TOD">Sunrise: {weatherData.sys.sunrise}</p>
                <p className={"TOD"}>Sunset: {weatherData.sys.sunset}</p>
            </div>

        </div>


    )

export default CardExampleCard;