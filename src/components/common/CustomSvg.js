import React from "react";

const CustomSvg = ({ icon }) => {
  switch (icon) {
    case "divideIcon":
      return (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8182 6.63636V9.18182H0.272727V6.63636H14.8182ZM7.54545 15.8182C6.97727 15.8182 6.49242 15.6212 6.09091 15.2273C5.69697 14.8258 5.5 14.3409 5.5 13.7727C5.5 13.2273 5.69697 12.7576 6.09091 12.3636C6.49242 11.9697 6.97727 11.7727 7.54545 11.7727C8.09091 11.7727 8.56061 11.9697 8.95455 12.3636C9.34849 12.7576 9.54545 13.2273 9.54545 13.7727C9.54545 14.3409 9.34849 14.8258 8.95455 15.2273C8.56061 15.6212 8.09091 15.8182 7.54545 15.8182ZM7.54545 4.04545C7.16667 4.04545 6.82197 3.95455 6.51136 3.77273C6.20076 3.59091 5.95455 3.3447 5.77273 3.03409C5.59091 2.72348 5.5 2.37879 5.5 2C5.5 1.45455 5.69697 0.984848 6.09091 0.590908C6.49242 0.196969 6.97727 0 7.54545 0C8.09091 0 8.56061 0.196969 8.95455 0.590908C9.34849 0.984848 9.54545 1.45455 9.54545 2C9.54545 2.56818 9.34849 3.05303 8.95455 3.45455C8.56061 3.84848 8.09091 4.04545 7.54545 4.04545Z"
            fill="white"
          />
        </svg>
      );

    default:
      break;
  }
};

export default CustomSvg;
