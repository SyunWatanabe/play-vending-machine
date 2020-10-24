import React, { FC } from 'react';
import CoinsSlot from './CoinsSlot';
import BillsSlot from './BillsSlot';
import MoneyDisplay from './MoneyDisplay';

type Props = {
  depositMoney: number;
  handleMoneyChange: (money: React.ReactText) => void;
  handleReturnMoney: () => void;
};

const DepositMoney: FC<Props> = ({
  depositMoney,
  handleMoneyChange,
  handleReturnMoney,
}) => {
  return (
    <div className="p-vm__money-features-container">
      <div className="p-vm__money-display-container">
        <MoneyDisplay money={depositMoney} />
        <a
          id="return-btn"
          href="javascript:void(0)"
          className="p-vm__btn-return"
          onClick={handleReturnMoney}
        >
          BACK
        </a>
      </div>
      <div className="p-vm__money-slots">
        <div className="p-vm__bills-container">
          硬貨
          <div className="p-vm__coins-slot">
            <CoinsSlot onMoneyChange={handleMoneyChange}></CoinsSlot>
          </div>
        </div>
        <div className="p-vm__bills-container">
          紙幣
          <div className="p-vm__bills-slot">
            <BillsSlot onMoneyChange={handleMoneyChange}></BillsSlot>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DepositMoney;
