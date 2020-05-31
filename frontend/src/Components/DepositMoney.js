import React, { useState } from "react";
import CoinsSlot from "./CoinsSlot";
import BillsSlot from "./BillsSlot";
import MoneyDisplay from "./MoneyDisplay";

const DepositMoney = () => {
  let [deposit_money, setMoney] = useState(0);

  const handleMoneyChange = selected => {
    setMoney(deposit_money + selected);
  };

  return (
    <div>
      <div className="p-vm__money-display">
        {deposit_money}
      </div>
      <div className="p-vm__bills-slot">
        <BillsSlot onMoneyChange={handleMoneyChange}></BillsSlot>
      </div>
      <div className="p-vm__coins-slot">
        <CoinsSlot onMoneyChange={handleMoneyChange}></CoinsSlot>
      </div>
    </div>
  );
};
export default DepositMoney;
