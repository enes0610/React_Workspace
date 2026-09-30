import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'db4c96a58be88ecb260aabc63072b4aa'; //OpenWeatherMap API Key

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setWeather(null);
      setError('Şehir bulunamadı.');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Hava Durumu</h1>
      <div className="input-group mb-3 justify-content-center">
        <input type="text" className="form-control w-25" placeholder="Şehir Adı Giriniz..." value={city}
          onChange={(e) => setCity(e.target.value)}></input>
        <button className="btn btn-primary" onClick={getWeather}>
          Getir
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {weather && (
        <div className="card weather-card p-4 mx-auto mt-4">
          <h3>{weather.name}, {weather.sys.country}</h3>
          <p>Sıcaklık: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default App;