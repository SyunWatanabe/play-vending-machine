import React, { useContext } from 'react';
import { DepositMoneyContext } from '../VendingMachine';

const PurchaseButton = ({ product, handlePurchase }) => {
  const depositMoney = useContext(DepositMoneyContext);
  const className = (price) => {
    let classes = 'p-vm__purchase-btn';
    if (price <= depositMoney) {
      classes += ' p-vm__purchase-btn--buyable';
    }
    return classes;
  };
  const isBuyable = (price) => {
    let disabled = true;
    if (price <= depositMoney) {
      disabled = false;
    }
    return disabled;
  };
  return (
    <button
      disabled={isBuyable(product.price)}
      className={className(product.price)}
      onClick={() => {
        handlePurchase(product.id, product.slot_id, product.price);
      }}
    ></button>
  );
};

export default PurchaseButton;
