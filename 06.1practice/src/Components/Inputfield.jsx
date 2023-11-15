import React from "react";

function Inputfield({ label, currencyOption, onAmountChange,onCurrencyChange, result }) {
  return (
    <>
      <label htmlFor="from">{label} </label>
      <input
        type="number"
        className="input"
        onChange={(event) =>
          onAmountChange && onAmountChange(Number(event.target.value))
        }
      />
      <select className="select"
      onChange={(event)=>onCurrencyChange && onCurrencyChange(event.target.value)}
      >
        {currencyOption?.map((curr) => (
          <option key={curr} value="curr">
            {curr}
          </option>
        ))}
      </select>
    </>
  );
}

export default Inputfield;
