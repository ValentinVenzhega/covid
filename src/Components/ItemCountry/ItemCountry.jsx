import React from "react";

import "./ItemCountry.css";

const ItemCountry = ({ item }) => {
  const { country, country_code, province, latest } = item;

  return (
    <div className="cart-item">
      <img
        src={`https://www.countryflagicons.com/FLAT/64/${country_code}.png`}
        alt={country}
      />
      <div className="cart-item__title">
        {country}
        {""}
        {province.length ? (
          <span className="cart-item__subtitle">: ({province})</span>
        ) : (
          ""
        )}
      </div>
      <div className="cart-item__content">
        <div className="cart-item__content-item">
          Confirmed:{" "}
          <span className="cart-item__content_color">{+latest.confirmed}</span>
        </div>
        <div className="cart-item__content-item">
          Death:{" "}
          <span className="cart-item__content_color">{+latest.deaths}</span>
        </div>
        <div className="cart-item__content-item">
          Recovered:{" "}
          <span className="cart-item__content_color">
            {latest.confirmed - latest.deaths}
          </span>
        </div>
      </div>
    </div>
  );
};

export { ItemCountry };
