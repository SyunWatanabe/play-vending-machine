import React from 'react';
import Product from './Product';
import PurchaseButton from './PurchaseButton';
const ProductDisplay = ({ products, handlePurchase }) => {
  return (
    <div className="p-vm__purchase-display">
      <>
        {products.map((product, index) => (
          <li className="p-vm__products-display-list" key={index}>
            <Product product={product} />
            <PurchaseButton product={product} handlePurchase={handlePurchase} />
          </li>
        ))}
      </>
    </div>
  );
};

export default ProductDisplay;
