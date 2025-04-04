/* Display.jsx */

import React from "react";

const Display = ({ expression, result }) => {
    return (
        <div className="display">
            <dvi className="expression">{expression}</dvi>
            <div className="result">{result !== null ? result : "0"}</div>
        </div>
    );
};

export default Display