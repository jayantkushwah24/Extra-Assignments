// 1. Create a React component that fetches weather data from an API endpoint
// using useEffect hook and displays the current temperature, humidity, and wind speed on the
// screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit
// units for the temperature.

import { useEffect } from "react";
import { useState } from "react";
import { fakeFetch } from "../Data/FakeFetch1";

export function RenderWeatherData() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    fakeFetch("https://example.com/api/weather")
      .then(({ status, data }) => {
        if (status === 200) {
          setWeather(data);
        } else {
          setError("Failed to fetch weather");
        }
      })
      .catch(() => {
        setError("an error occurred while fetching weather");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertTemperature = (temperatureInCelsius) => {
    return isCelsius
      ? `${temperatureInCelsius}°C`
      : `${(temperatureInCelsius * 9) / 5 + 32}°F`;
  }

  return (
    <>
      <h1>Weather</h1>
      <div>
        <p>Temperature : {convertTemperature(weather.temperature)}</p>
        <p>Humidity : {weather.humidity}%</p>
        <p>Wind Speed : {weather.windSpeed} km/h</p>
      </div>
      <button onClick={toggleTemperatureUnit}>
        Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
      </button>
    </>
  );
}
