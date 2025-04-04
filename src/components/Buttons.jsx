/* Buttons.jsx */
import React from "react";

const Buttons = ({ onClick, onClear, onCalculate }) => {
    const buttons = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", "C", "=", "+",
    ];

    return (
        <div className="buttons-grid">
            {buttons.map((btn) => (
                <button key={btn}
                    className="btn"
                    onClick={() => {
                        if (btn === "=") {
                            onCalculate();
                        } else if (btn === "C") {
                            onClear();
                        } else {
                            onClick(btn);
                        }
                    }}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default Buttons;
