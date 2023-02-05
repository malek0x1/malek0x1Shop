import React from "react";
import "./style.scss";

const Announcement = ({ message }) => {
  return (
    <div className="announcement">
      <p className="announcement__message">{message}</p>
    </div>
  );
};

export default Announcement;
