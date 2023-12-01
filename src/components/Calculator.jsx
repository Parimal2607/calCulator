import React, { useEffect, useState } from "react";
import { calVal } from "../utils/constant";
import NumberFormat from "react-number-format";
import { motion } from "framer-motion";
const Calculator = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const [notNum, setNotNum] = useState(false);
  const [nan, setNan] = useState(false);

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
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
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

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
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
  
    setInput("");
    setPreState(cal);
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
    setNotNum(false);
    setNan(false)
  };

  return (
    <div className="calculator">
      <div className="blur-effect"></div>
      <div className="cal-screen pb-0">
        <div className="screen">
          <motion.div
            className="cal-upper-screen"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {!notNum && !nan ? (
              input !== "" || input === "0" ? (
                <NumberFormat
                  value={input}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              ) : (
                <NumberFormat
                  value={preState}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              )
            ) : nan ? (
              <span>NaN</span>
            ) : (
              <span>Infinity</span>
            )}
          </motion.div>
        </div>
        <div className="cal-btn-part">
          <div className="upper-section">
            {calVal.map((val, index) => (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileTap={{ scale: 0.1 }}
                key={index}
                className={val.className}
                value={val.value}
                onClick={
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
              >
                {val.name}
              </motion.button>
            ))}
          </div>
        </div>
        <motion.div
          className="cal-footer"
          initial={{ y: "350%" }}
          animate={{ y: "0" }}
          transition={{ duration: 1 }}
        >
          <div className="inner-line"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Calculator;
