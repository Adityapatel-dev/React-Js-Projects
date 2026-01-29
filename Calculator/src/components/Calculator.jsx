import { useCallback, useEffect, useState } from "react";
import Button from "./Button";

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  
];

const operators = ["+", "-", "*", "/"];

function Calculator() {
  const [expression, setExpression] = useState("");

  const isOperator = (char) => operators.includes(char);

  const safeEvaluate = (exp) => {
    try {
      return String(Function(`"use strict"; return (${exp})`)());
    } catch {
      return "Error";
    }
  };

  const handleInput = useCallback((value) => {
    if (value === "C") {
      setExpression("");
      return;
    }

    if (value === "=") {
      setExpression((prev) => {
        if (!prev || isOperator(prev.slice(-1))) return prev;
        return safeEvaluate(prev);
      });
      return;
    }

    setExpression((prev) => {
      const lastChar = prev.slice(-1);

      // Prevent starting with operator (except minus)
      if (!prev && isOperator(value) && value !== "-") {
        return prev;
      }

      // Prevent consecutive operators
      if (isOperator(lastChar) && isOperator(value)) {
        return prev;
      }

      // Prevent multiple decimals in same number
      if (value === ".") {
        const lastNumber = prev.split(/[+\-*/]/).pop();
        if (lastNumber.includes(".")) {
          return prev;
        }
      }

      return prev + value;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const allowedKeys = "0123456789+-*/.";

      if (allowedKeys.includes(e.key)) {
        handleInput(e.key);
      }

      if (e.key === "Enter") {
        handleInput("=");
      }

      if (e.key === "Backspace") {
        setExpression((prev) => prev.slice(0, -1));
      }

      if (e.key === "Escape") {
        handleInput("C");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleInput]);

  return (
  <div className="calculator-wrapper">
    <div className="calculator">
      <div className="display">
        {expression || "0"}
      </div>

      <div className="buttons">
        {buttons.map((btn) => (
          <Button
            key={btn}
            value={btn}
            onClick={handleInput}
          />
        ))}
      </div>
    </div>
  </div>
);

}

export default Calculator;
