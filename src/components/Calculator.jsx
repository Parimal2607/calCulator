import React, { useEffect, useState } from "react";
import { calVal } from "../utils/constant";
import Button from "./Button";

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Calculator = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  console.log(calc);
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e,value) => {
    e.preventDefault();

    console.log(value);
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    console.log(calc.sign);
    if (calc.num && !calc.sign) {
      const accumulatedResult = calc.res + calc.num;

      const cleanedResult = accumulatedResult.replace(/^0+/, "");
      setCalc({
        ...calc,
        res: cleanedResult,
        sign: "",
        num: 0,
      });
    }
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc((pre) => ({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: pre.sign,
        num: Number(pre.num),
      }));
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const calculateFontSize = () => {
    const baseFontSize = 44;
    const fontSizeMultiplier = 2;
    const maxLength = 5;
    const maxWidth = 234;

    // Calculate the length of the displayed number (remove spaces and get the length)
    const numLength = removeSpaces(calc.num).length;

    const adjustedFontSize =
      baseFontSize - fontSizeMultiplier * Math.max(numLength - maxLength, 0);

    // Calculate the adjusted width based on the adjusted font size
    const adjustedWidth = numLength * (adjustedFontSize / baseFontSize);

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
            <span style={{ fontSize: calculateFontSize() }}>
              {typeof calc.res == "string" && typeof calc.num == "string"
                ? calc.num
                : typeof calc.res == "number" && typeof calc.num == "string"
                ? calc.num
                : typeof calc.res == "string" && typeof calc.num == "number"
                ? calc.res
                : calc.num}
            </span>
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
                btnIcon={val.icon}
                ClickFunction={(e) => {
                  val.value === "AC"
                    ? resetClickHandler(e)
                    : val.value === "+/-"
                    ? invertClickHandler(e)
                    : val.value === "%"
                    ? percentClickHandler(e)
                    : val.value === "="
                    ? equalsClickHandler(e)
                    : val.value === "/" ||
                      val.value === "X" ||
                      val.value === "-" ||
                      val.value === "+"
                    ? signClickHandler(e,val.value)
                    : val.value === "."
                    ? commaClickHandler(e)
                    : numClickHandler(e);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
