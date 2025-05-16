import React from "react";

const Button = ({
  id,
  title,
  onClick,
  containerClass,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      id={id}
      onClick={onClick} // ← forward onClick
      className={`group relative z-10 cursor-pointer overflow-hidden rounded-full px-5 py-2 text-black transition-all border-transparent border-4 duration-300 hover:-translate-y-1 ${containerClass}`}
    >
      <span
        className={`group relative transition-colors inline-flex overflow-hidden font-general uppercase group-hover:text-white text-xs`}
        >
        <div className="z-20 inline-flex">
        {leftIcon}
          {title}
          {rightIcon}
        </div>
      </span>
      <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out"></span>
    </button>
  );
};

export default Button;
