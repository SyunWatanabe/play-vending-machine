import React, { useState } from 'react';

const BillsSlot = ({ onMoneyChange }) => {
  // let [deposit_bills, setBills] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let selected = parseInt(
      document.bills.kind[document.bills.kind.selectedIndex].value
    );
    onMoneyChange(selected);
  };

  return (
    <form onSubmit={handleSubmit} name="bills">
      <select name="kind">
        <option value="0">0</option>
        <option value="1000">1000</option>
      </select>
      <button type="submit">投入</button>
    </form>
  );
};

export default BillsSlot;