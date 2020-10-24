import React, { FC, useContext } from 'react';
import { DepositMoneyContext } from '../VendingMachine';

type Props = {
  product: Product;
  handlePurchase: (
    product_id: number,
    slot_id: number,
    purchase_price: number
  ) => void;
};

type Product = {
  id: number;
  name: string;
  price: number;
  maker: string;
  slot_id: number;
  created_at: string;
  updated_at: string;
};

const PurchaseButton: FC<Props> = ({ product, handlePurchase }) => {
  const depositMoney = useContext(DepositMoneyContext);
  const className = (price: number) => {
    let classes = 'p-vm__purchase-btn';
    if (price <= depositMoney) {
      classes += ' p-vm__purchase-btn--buyable';
    }
    return classes;
  };
  const isBuyable = (price: number) => {
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
