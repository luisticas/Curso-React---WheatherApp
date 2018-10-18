import React from 'react';
import WeatherExtraInfo from './WheatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';

const WeatherData = () => (
    <div>
        <WheatherTemperature />
        <WeatherExtraInfo />
    </div>
);

export default WeatherData;