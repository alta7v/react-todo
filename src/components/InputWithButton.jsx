import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputWithButton = (props) => {
  const { placeholder, text, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder={placeholder} value={text} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
