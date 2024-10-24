import { useState } from 'react';

import Variable from '../Variable/Variable';
import './Temperatures.css';

function Temperatures() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);

    const CelsiusChange = (value) => {
        const celsiusValue = parseFloat(value);
            setCelsius(celsiusValue);
            setFahrenheit((celsiusValue * 9/5) + 32);
            setKelvin(celsiusValue + 273.15);
    };

    const FahrenheitChange = (value) => {
        const fahrenheitValue = parseFloat(value);
            setFahrenheit(fahrenheitValue);
            setCelsius((fahrenheitValue - 32) * 5/9);
            setKelvin((fahrenheitValue + 459.67) * 5/9);       
    };

    const KelvinChange = (value) => {
        const kelvinValue = parseFloat(value);
            setKelvin(kelvinValue);
            setCelsius(kelvinValue - 273.15);
            setFahrenheit((kelvinValue * 9/5) - 459.67);
    };

    return (
        <div className='temperatures-container'>
            <h3 className='temperatures-title'>Temperatures</h3>
            <h3 className='temperatures-variables'>
                <span className='badge bg-primary'>{celsius.toFixed(2)}°C</span>
                <span className='badge bg-primary'>{fahrenheit.toFixed(2)}°F</span>
                <span className='badge bg-primary'>{kelvin.toFixed(2)}°K</span>
            </h3>
            <div className='temperatures-variables'>
                <Variable name={'Celsius'} value={celsius} setValue={CelsiusChange} />
                <Variable name={'Fahrenheit'} value={fahrenheit} setValue={FahrenheitChange} />
                <Variable name={'Kelvin'} value={kelvin} setValue={KelvinChange} />
            </div>
        </div>
    );
}

export default Temperatures;
