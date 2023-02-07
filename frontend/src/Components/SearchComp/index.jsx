import React, { useEffect, useRef, useState } from "react";
import SearchResultItem from "../SearchResultItem";
import "./style.scss";
const SearchComp = ({ setSearchOpen }) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const ref = useRef();
  const handleSearch = async (keyword) => {
    await fetch(`${process.env.REACT_APP_API_URL}/api/search/${keyword}`)
      .then((res) => res.json())
      .then((r) => {
        setResult(r);
      })
      .catch((e) => console.log(`error ${e}`));
  };
  useEffect(() => {
    handleSearch(search);
  }, [search]);
  return (
    <div className="searchComp">
      <div className="searchComp__wrapper">
        <input
          ref={ref}
          type="text"
          placeholder="Search"
          className="searchComp__wrapper-inpt"
          onKeyDown={(e) => {
            setSearch(e.target.value);
          }}
        />
        <i className="uil uil-search header__icons__item"></i>
        <i
          onClick={() => {
            setSearchOpen(false);
          }}
          className="uil uil-multiply searchComp__wrapper-close header__icons__item"
        ></i>
      </div>
      <div className="searchComp__wrapper__searchResult">
        {result &&
          result.map((item) => (
            <SearchResultItem
              image={item?.image}
              name={item?.name}
              link={`/product/${item?.categoryId}/${item.id}`}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchComp;
