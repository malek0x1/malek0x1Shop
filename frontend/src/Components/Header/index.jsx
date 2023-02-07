import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchComp from "../SearchComp";
import "./style.scss";
const navItems = [
  { name: "home", href: "/" },
  { name: "Hoodies", href: "/collection/1" },
  { name: "Pants", href: "/collection/2" },
  { name: "SweatShirts", href: "/collection/3" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
const Header = () => {
  const [open, isOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "scroll");
  }, [open]);

  return (
    <div className="header container">
      {searchOpen && <SearchComp setSearchOpen={setSearchOpen} />}
      <div
        className="header__menuIcon"
        onClick={() => {
          isOpen(!open);
        }}
      >
        {open ? (
          <i className="uil uil-multiply header__icons__item--toggle header__icons__item"></i>
        ) : (
          <i className="uil uil-bars header__icons__item--toggle header__icons__item"></i>
        )}
      </div>

      <div className="header__logo">
        <img
          src="/logo.png"
          alt=""
          draggable={false}
          className="header__logo-img"
        />
      </div>
      <div
        className={`header__navigation ${
          open && `header__navigation--mobile`
        } `}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            activeClassName="active"
            className="header__navigation__link"
          >
            <div className="header__navigation__link__item">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <div className="header__icons">
        <i
          onClick={() => {
            setSearchOpen(true);
          }}
          className="uil uil-search header__icons__item"
        ></i>
        <i className="uil uil-user header__icons__item"></i>
        <i className="uil uil-shopping-bag header__icons__item"></i>
      </div>
    </div>
  );
};

export default Header;
