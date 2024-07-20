import React, { useState } from "react";
import "./QuantityInput.css"

export const QuantityInput = ({ value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <input
      type="number"
      min="1"
      value={isFocused ? value : ''}
      placeholder={!isFocused ? 'Unesite količinu' : ''}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className="quantity-input"
    />
  );
};
