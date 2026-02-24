import React from "react";
import "./WeatherCard.css";
function WeatherCard({ weather }) {
  if (!weather) return null;

  const weatherMain = weather.weather[0].main.toLowerCase();
  const weatherClass = weatherMain.includes("cloud") 
    ? "cloudy"
    : weatherMain.includes("rain") 
    ? "rainy"
    : weatherMain.includes("clear") 
    ? "sunny"
    : "default";

  return (
    <div className={`weather-card ${weatherClass}`}>
      <h2 className="city">{weather.name}</h2>
      <p className="description">{weather.weather[0].description}</p>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt={weather.weather[0].description}
      />
      <p className="temp">{weather.main.temp}°C</p>
      <div className="details">
        <p>Feels like: {weather.main.feels_like}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
