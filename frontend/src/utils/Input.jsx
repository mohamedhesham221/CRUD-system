import React from "react";

const Input = ({ label, id, type, istextArea = false, ...props }) => {
  return (
    <div className="flex flex-col gap-1 mb-3">
      <label htmlFor={id}>{label}</label>
      {istextArea ? (
        <textarea
          name={id}
          id={id}
          className="border-1 outline-none px-3 py-2 rounded-lg resize-none"
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          className="border-1 outline-none px-3 py-2 rounded-lg"
          name={id}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
