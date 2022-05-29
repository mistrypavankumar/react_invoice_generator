import React from "react";
import "./TextInputForm.css";

const TextInputForm = ({
  name,
  label,
  value,
  onChange,
  type,
  autoComplete,
}) => {
  return (
    <div className="flex relative h-[40px] group mb-7">
      <input
        type={type || "text"}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="form__input w-full border-2 border-gray-300 rounded-md  outline-none px-4 group focus-within:border-blue-500
        hover:border-gray-400
        bg-transparent text-gray-700
        
        "
        autoComplete={autoComplete || "off"}
      />
      <label
        htmlFor={name}
        className="form__label absolute top-[18%] text-gray-400 left-[4%] bg-white group-focus-within:text-sm
        group-focus-within:text-blue-500
        font-medium
         transition-all 
        duration-300
        pointer-events-none
        cursor-text"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInputForm;
