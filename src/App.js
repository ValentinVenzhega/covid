import React, { useEffect, useState } from "react";
import axios from "axios";
import { ItemCountry } from "./Components/ItemCountry/ItemCountry";
import { LoadingBlock } from "./Components/LoadingBlock/LoadingBlock";
import { useTheme } from "./hooks/useTheme/useTheme";

import "./App.css";

function App() {
  const { setTheme } = useTheme();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const API_URL = `https://coronavirus-tracker-api.herokuapp.com/v2/locations?source=jhu`;
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(API_URL);

        setCountries(itemsResponse.data.locations);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderItems = () => {
    const filterItems = countries.filter((item) =>
      item.country.toLowerCase().includes(search.toLowerCase()),
    );

    return (
      <>
        {filterItems.map((item) => (
          <ItemCountry loading={isLoading} item={item} key={item.id} />
        ))}
      </>
    );
  };

  const hadleLightThemeClick = () => {
    setTheme("light");
  };

  const hadleDarkThemeClick = () => {
    setTheme("dark");
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">Covid 2022</div>
        <div className="theme">
          <button className="btn btn_color" onClick={hadleDarkThemeClick}>
            dark
          </button>
          <button className="btn" onClick={hadleLightThemeClick}>
            light
          </button>
        </div>
      </header>
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Введите название страны"
          onChange={handleChange}
        />
      </div>
      <div className="content">
        {isLoading
          ? Array(12)
              .fill(0)
              .map((item, index) => <LoadingBlock key={index} />)
          : renderItems()}
      </div>
    </div>
  );
}

export default App;
