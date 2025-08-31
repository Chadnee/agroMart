import React from 'react';

const Button = ({
  text,
  bgColor = "bg-yellow-700",
  textColor = "text-white",
  bgHover = "bg-blue-950",
  hoverText = "text-sky-400",
  rounded = "rounded-md",
  children
}) => {
  return (
    <div
      style={{ letterSpacing: ".5px" }}
      className={`
        relative px-10 text-[17px] py-1 overflow-hidden
        ${bgColor} ${textColor} font-semibold ${rounded}
        shadow-lg 
        transition-colors duration-700 ease-in-out
        hover:bg-blue-950 hover:text-sky-400
        hover:shadow-xl hover:scale-105
      `}
    >
      {text}
      {children}
    </div>
  );
};

export default Button;
