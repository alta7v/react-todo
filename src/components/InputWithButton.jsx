import React from "react";

export const InputWithButton = (props) => {
  const { placeholder, text, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder={placeholder} value={text} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
