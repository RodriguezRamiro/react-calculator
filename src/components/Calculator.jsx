import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";


const Calculator = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearDisplay = () => {
    setExpression("");
    setResult(null);
  };

  const calculateResult = () => {
    try {
        const sanitizedExpression = expression
        .replace(/√/g, "Math.sqrt")
        .replace(/\^/g, "Math.pow")
        .replace(/log/g, "Math.log")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
      setResult(eval(expression));
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <Display expression={expression} result={result} />
      <Buttons onClick={handleClick} onClear={clearDisplay} onCalculate={calculateResult} />
    </div>
  );
};

export default Calculator;
