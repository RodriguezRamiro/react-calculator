/* Buttons.jsx */
import React from "react";

const Buttons = ({ onClick, onClear, onCalculate }) => {
  const buttons = [
    { label: "7", className: "arithmetic" },
    { label: "8", className: "arithmetic" },
    { label: "9", className: "arithmetic" },
    { label: "/", className: "arithmetic" },
    { label: "4", className: "arithmetic" },
    { label: "5", className: "arithmetic" },
    { label: "6", className: "arithmetic" },
    { label: "*", className: "arithmetic" },
    { label: "1", className: "arithmetic" },
    { label: "2", className: "arithmetic" },
    { label: "3", className: "arithmetic" },
    { label: "-", className: "arithmetic" },
    { label: "0", className: "arithmetic" },
    { label: "C", className: "clear" },
    { label: "=", className: "equals" },
    { label: "+", className: "arithmetic" },
    { label: "√", className: "scientific" },
    { label: "^", className: "scientific" },
    { label: "log", className: "scientific" },
    { label: "sin", className: "scientific" },
    { label: "cos", className: "scientific" },
    { label: "tan", className: "scientific" },
  ];

  return (
    <div className="buttons-grid">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          className={`btn ${btn.className}`}
          onClick={() => {
            if (btn.label === "=") {
              onCalculate();
            } else if (btn.label === "C") {
              onClear();
            } else {
              onClick(btn.label);
            }
          }}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
