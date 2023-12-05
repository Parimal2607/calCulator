import React from "react";
const Button = ({btnClass, value, ClickFunction, btnValue}) => {
  return (
    <>
      <button className={btnClass} value={value} onClick={ClickFunction}>
        {btnValue}
      </button>
    </>
  );
};

export default Button;
