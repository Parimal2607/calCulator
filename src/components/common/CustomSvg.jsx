import React from "react";

const CustomSvg = ({ icon }) => {
  switch (icon) {
    case "plusMinusIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7h6M7 4v6m13 8h-6m-9 1L19 5"
          />
        </svg>
      );
    case "dividedIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 11h14v2H5zm7.002-7a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4zm0 12a2 2 0 1 0-.004 4a2 2 0 0 0 .004-4z"
          />
        </svg>
      );
    case "multiIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 6L6 18M6 6l12 12"
          />
        </svg>
      );
    case "plusIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
          />
        </svg>
      );
    case "minusIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M19 12.998H5v-2h14z" />
        </svg>
      );
    case "equalIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M5 16v-2h14v2H5Zm0-6V8h14v2H5Z" />
        </svg>
      );
    case "percentIcon":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4S4 5.57 4 7.5S5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9S6 8.33 6 7.5S6.67 6 7.5 6zM4.002 18.583L18.59 3.996l1.414 1.414L5.417 19.997zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"
          />
        </svg>
      );
    default:
      break;
  }
};

export default CustomSvg;
