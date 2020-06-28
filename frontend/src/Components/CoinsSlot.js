import React, { useState } from 'react';

const CoinsSlot = ({ onMoneyChange }) => {
  // let [deposit_coins, setCoins] = useState(0);
  // const deposit_coins = this.props.depositMoney
  // const selectedValue = document.coins.kind[document.coins.kind.selectedIndex].value;
  const handleSubmit = (e) => {
    e.preventDefault();
    let selected = parseInt(
      document.coins.kind[document.coins.kind.selectedIndex].value
    );
    onMoneyChange(selected);
  };

  return (
    <form onSubmit={handleSubmit} name="coins">
      <select name="kind">
        <option value="0">0</option>
        <option value="10">10</option>
        <option value="50">50</option>

        <option value="100">100</option>
        <option value="500">500</option>
      </select>
      <button type="submit">投入</button>
    </form>
  );
};

export default CoinsSlot;
