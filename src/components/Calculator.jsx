import React, { useEffect, useState } from "react";
import { calVal } from "../utils/constant";
import Button from "./Button";
const Calculator = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [notNum, setNotNum] = useState(false);
  const [nan, setNan] = useState(false);

  /**
   * Generates a function comment for the given function body.
   *
   * @param {Event} e - The event object.
   * @return {void} This function does not return anything.
   */
  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;
    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    // console.log(preState, "pre");
    // console.log(curState, "cur");
    // console.log(input, "input");
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  /**
   * Sets the operator type and performs the necessary calculations.
   *
   * @param {Event} e - The event object representing the button click
   * @return {void} This function does not return a value
   */
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  /**
   * Calculates the result of a mathematical operation based on the operator and operands.
   *
   * @param {Event} e - The event object.
   * @return {void} No return value.
   */
  const equals = (e) => {
    // if (e?.target.innerText === "=") {
    //   setTotal(true);

    // }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        if (cal === "Infinity") {
          setNotNum(true);
        }
        if (cal === "NaN") {
          setNan(true);
        }
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    if (e?.target.innerText === "=") {
      setTotal(true);
      setInput("");
      console.log("true");
      // console.log(curState, "cur");
      // console.log(preState, "pre");
      setPreState(cal);
    } else {
      console.log("false");
      setInput("");
      setPreState(cal);
      setCurState("");
    }
  };

  /**
   * Toggles the sign of the current state.
   *
   * @param {string} curState - The current state of the calculator.
   * @return {void} This function does not return a value.
   */
  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  /**
   * Updates the current state value by converting it to a percentage.
   *
   * @return {void} No return value.
   */
  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  /**
   * Resets the state variables to their initial values.
   *
   * @return {void} No return value
   */
  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
    setNotNum(false);
    setNan(false);
  };
  const calculateFontSize = () => {
    const baseFontSize = 44;
    const fontSizeMultiplier = 2;
    const maxLength = 5;
    const maxWidth = 234;

    const adjustedFontSize =
      baseFontSize - fontSizeMultiplier * Math.max(input.length - maxLength, 0);

    // Calculate the adjusted width based on the adjusted font size
    const adjustedWidth = input.length * (adjustedFontSize / baseFontSize);

    // If the adjusted width exceeds the maximum width, further reduce the font size
    if (adjustedWidth > maxWidth) {
      const reductionFactor = maxWidth / adjustedWidth;
      return (adjustedFontSize * reductionFactor).toFixed(2) + "px";
    }

    // Ensure the font size is not larger than the base font size
    return Math.min(adjustedFontSize, baseFontSize) + "px";
  };
  return (
    <div className="calculator">
      <div className="cal-screen pb-0">
        <div className="screen">
            <div className="upper-dot">
              <div className="red-dot"></div>
              <div className="yellow-dot"></div>
              <div className="green-dot"></div>
            </div>
          <div className="cal-upper-screen">
            {!notNum && !nan ? (
              input !== "" || input === "0" ? (
                <span style={{ fontSize: calculateFontSize() }}>{input}</span>
              ) : (
                <span style={{ fontSize: calculateFontSize() }}>
                  {preState}
                </span>
              )
            ) : nan ? (
              <span>NaN</span>
            ) : (
              <span>Infinity</span>
            )}
          </div>
        </div>
        <div className="cal-btn-part">
          <div className="upper-section">
            {calVal.map((val, index) => (
              <Button
                key={index}
                btnClass={val.className}
                value={val.value}
                btnValue={val.name}
                ClickFunction={
                  val.value === "AC"
                    ? reset
                    : val.value === "+/-"
                    ? minusPlus
                    : val.value === "%"
                    ? percent
                    : val.value === "/" ||
                      val.value === "+" ||
                      val.value === "-" ||
                      val.value === "X"
                    ? operatorType
                    : val.value === "="
                    ? equals
                    : inputNum
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
