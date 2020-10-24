import React, { FC } from 'react';
import Product from './Product';
import PurchaseButton from './PurchaseButton';

type Props = {
  products: ProductType[];
  handlePurchase: handlePurchaseFunction;
};

type ProductType = React.ComponentProps<typeof Product>['product'];
type handlePurchaseFunction = React.ComponentProps<
  typeof PurchaseButton
>['handlePurchase'];

const ProductDisplay: FC<Props> = ({ products, handlePurchase }) => {
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
