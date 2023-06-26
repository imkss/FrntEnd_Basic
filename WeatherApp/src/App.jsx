import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(null);

  const [search, setSearch] = useState("Kolkata");

  useEffect(() => {
    const fetchApi = async () => {
      const apiKey = "452c055611175f50daa4a7c3ef309cde";
      const unit = "metric";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=${unit}`;

      const response = await fetch(url);
      const resJson = await response.json();
      //   console.log(resJson);

      setCity(resJson.main);
      // setCity(resJson.wind);
    };

    fetchApi();
  }, [search]);

  //   const lName = city.name;
  //   const temp = city.main.feels_like;
  //   const min = city.main.temp_min;
  //   const max = city.main.temp_max;
  //   const pre = city.main.pressure;
  //   const hum = city.main.humidity;
  //   const win = city.wind.speed;
  //   const desc = city.weather[0].description;
  //   const icon = city.weather[0].icon;
  //   const imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            className="inputField"
            type="search"
            placeholder="Search A Place"
            // value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <div>
            <p className="errorMsg">No Place Found</p>
          </div>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="gap fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">
                {city.temp}°C
                {/* <img src={imgURL}></img> */}
              </h1>
              {/* <h4> {city.weather[0].description}</h4> */}
              <h3 className="tempmin_max">
                Humidity {city.humidity}% | Pressure {city.pressure}
                Mbar
              </h3>

              <h3 className="tempmin_max">Real feel {city.feels_like}°C</h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
      <footer>
        <h3>
          Designed & Maintained with ❤ by Sunny &copy; 2023 All rights reserved
        </h3>
      </footer>
    </>
  );
};

export default App;
