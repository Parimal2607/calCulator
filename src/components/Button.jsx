import React from "react";
import CustomSvg from "./common/CustomSvg";
const Button = ({ btnClass, value, ClickFunction, btnValue, btnIcon }) => {
  return (
    <>
      <button className={btnClass} value={value} onClick={ClickFunction}>
        {btnIcon ? <CustomSvg icon={btnIcon} /> : btnValue}
      </button>
    </>
  );
};

export default Button;
