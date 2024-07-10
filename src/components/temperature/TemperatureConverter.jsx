import { useState } from 'react';
import './TemperatureConverter.css';

function TemperatureConverter() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState(null);

  function convertToFahrenheit() {
    const fahrenheitValue = (parseFloat(celsius) * 1.8) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  }

  return (
    <div className="temperature-converter">
      <h2>Conversor de temperatura</h2>
      <input 
        type="number" 
        value={celsius} 
        onChange={(e) => setCelsius(e.target.value)} 
        placeholder="Enter temperature in Celsius" 
      />
      <button onClick={convertToFahrenheit}>Converter</button>
      {fahrenheit !== null && <p>Temperatura em Fahrenheit: {fahrenheit}°F</p>}
    </div>
  );
}

export default TemperatureConverter;
