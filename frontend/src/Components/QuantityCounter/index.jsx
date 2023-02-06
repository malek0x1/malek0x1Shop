import React, { useState } from "react";
import "./style.scss";
const QuantityCounter = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="quantityCounter">
      <p className="quantityCounter__title">Quantity</p>
      <div className="quantityCounter__wrapper">
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
          className="quantityCounter__wrapper__minus"
          disabled={counter < 1}
        >
          <i class="uil uil-minus"></i>
        </button>
        <div className="quantityCounter__wrapper__counter">{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
          className="quantityCounter__wrapper__plus"
        >
          <i class="uil uil-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
