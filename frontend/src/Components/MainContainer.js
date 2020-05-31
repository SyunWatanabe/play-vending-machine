import React from 'react';
import DepositMoney from './DepositMoney';
import '../../src/VendingMachine.scss';

const MainContainer = () => {
  return (
    <div className="p-vm">
      <div className="p-vm__body">
        <div className="p-vm__products-display"></div>
        <div className="p-vm__others">
          <div className="p-vm__info-display"></div>
          <DepositMoney>
            
          </DepositMoney>
          <div className="p-vm__return-btn"></div>
          <div className="p-vm__return-slot"></div>
          <div className="p-vm__dispensing-slot"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
