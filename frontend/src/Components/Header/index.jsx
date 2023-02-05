import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
const navItems = [
  { name: "home", href: "/" },
  { name: "Category1", href: "/category1" },
  { name: "Category2", href: "/category2" },
  { name: "Category3", href: "/category3" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
const Header = () => {
  const [open, isOpen] = useState(false);

  useEffect(() => {
    open
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "scroll");
  }, [open]);

  return (
    <div className="header container">
      <div
        className="header__menuIcon"
        onClick={() => {
          isOpen(!open);
        }}
      >
        {open ? (
          <i class="uil uil-multiply header__icons__item--toggle header__icons__item"></i>
        ) : (
          <i class="uil uil-bars header__icons__item--toggle header__icons__item"></i>
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
        <i class="uil uil-search header__icons__item"></i>
        <i class="uil uil-user header__icons__item"></i>
        <i class="uil uil-shopping-bag header__icons__item"></i>
      </div>
    </div>
  );
};

export default Header;
