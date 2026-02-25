import React from 'react'
import { useState } from "react";
import Search from "../components/Search";
import WeatherCard from "../components/WeatherCard";
import Nav from "../components/Nav";
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import './Home.css';
import homeImg from '../assets/image/weather-1.jpg'
import homeImg1 from '../assets/image/weather-3.jpg'
// import button from '@mui/material/Button';

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  
//   const handleSearch = () => {
//   console.log("Searching for:", city);

  const handleSearch = async () => {
  if (!city) return;

  
  setIsLoading(true);
  setError("");

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    setWeather(data);
  } catch (err) {
    setError(err.message);
    setWeather(null);
  } finally {
    setIsLoading(false);
  }
};


  return (
      <div className='app'>
            <Nav/>
        <div className='homepage'>
            <Search city={city} setCity={setCity} onSearch={handleSearch} />
            {isLoading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <WeatherCard weather={weather} />
            <div className='card'>
            {/* <img className='home-img' src={homeImg} alt="home-img" /> */}
              <Cards/>
              <img className='home-img' src={homeImg} alt="home-img" />
            </div>
            <button className='home-button' path='/Forecast'>Learn More</button>
        </div>
            <Footer/>
      </div>
  );
}

export default Home
