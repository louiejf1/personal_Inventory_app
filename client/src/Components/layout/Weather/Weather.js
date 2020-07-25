import React, { useState } from "react";

const api = {
  key: "fa4500306ed9b5b17ead3f67dca48f5f",
  apiUrl: `http://api.openweathermap.org/data/2.5/`,
};

function Weather(props) {
  // API
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.apiUrl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  // Date builder
  const dateBuilder = (getDate) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[getDate.getDay()];
    let date = getDate.getDate();
    let month = months[getDate.getMonth()];
    let year = getDate.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // Date builder

  return (
    <div
      className={
        typeof weather.section != "undefined"
          ? weather.section.temp >= 70
            ? "Weather warm"
            : "Weather"
          : "WeatherCard"
      }
    >
      <section className="WeatherCard snow">
        <main className="WeatherContent">
          <h2>Weather</h2>
          <div className="search-box">
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {typeof weather.main != "undefined" ? (
            <div>
              <div className="location-box">
                <h4 className="location">
                  {weather.name},{weather.sys.country}
                </h4>
                <h5 className="date">{dateBuilder(new Date())}</h5>
              </div>
              <div className="weather-box">
                <h3 className="temp">{Math.round(weather.main.temp) + " F"}</h3>
              </div>
              <h3 className="condition">{weather.weather[0].main}</h3>
            </div>
          ) : (
            ""
          )}
        </main>
      </section>
    </div>
  );
}

export default Weather;
