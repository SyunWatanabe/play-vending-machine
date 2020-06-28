import React from 'react';
import ProductDisplay from './ProductDisplay';
import DepositMoney from './DepositMoney';
import ReturnMoney from './ReturnMoney';
import ReturnSlot from './ReturnSlot';
import '../../src/VendingMachine.scss';

const MainContainer = ({
  firstLine,
  secondLine,
  depositMoney,
  change,
  purchasedProductId,
  handleMoneyChange,
  handleReturnMoney,
  handlePurchase,
  handleCollectChange,
}) => {
  return (
    <div className="p-vm">
      <script src="../lib/odometer.js"></script>
      <div className="p-vm__body">
        <div className="p-vm__products-display">
          <div className="p-vm__prroducts-display-first-line">
            <ProductDisplay
              products={firstLine}
              handlePurchase={handlePurchase}
            />
          </div>
          <div className="p-vm__prroducts-display-second-line">
            <ProductDisplay
              products={secondLine}
              handlePurchase={handlePurchase}
            />
          </div>
        </div>
        <div className="p-vm__others">
          <div className="p-vm__middle-container">
            <div className="p-vm__info-display "></div>
            <DepositMoney
              depositMoney={depositMoney}
              handleMoneyChange={handleMoneyChange}
              handleReturnMoney={handleReturnMoney}
            />
          </div>
          <div className="p-vm__bottom-container">
            <ReturnSlot purchasedProductId={purchasedProductId} />
            <ReturnMoney
              change={change}
              handleCollectChange={handleCollectChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
