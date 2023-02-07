import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const SearchResultItem = ({ image, name, link }) => {
  return (
    <Link to={link}>
      <div className="searchComp__wrapper__searchResult__item">
        <img
          src={image}
          alt=""
          className="searchComp__wrapper__searchResult__item-img"
        />
        <p className="searchComp__wrapper__searchResult__item-name">{name}</p>
      </div>
    </Link>
  );
};

export default SearchResultItem;
