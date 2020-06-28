import React from 'react';

const ReturnSlot = ({ purchasedProductId }) => {
  const setProductImage = () => {
    if (purchasedProductId == '') return;

    if (purchasedProductId == 10) {
      const randomId = Math.floor(Math.random() * 9) + 1;
      return require(`../images/purchased-product-${randomId}.svg`);
    }
    return require(`../images/purchased-product-${purchasedProductId}.svg`);
  };

  const purchasedClassName = purchasedProductId ? 'p-vm__return-product' : '';
  return (
    <div className="p-vm__return-slot">
      <img className={purchasedClassName} src={setProductImage()} />
    </div>
  );
};

export default ReturnSlot;
