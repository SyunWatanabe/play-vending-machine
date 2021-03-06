import React, { FC } from 'react';

type Props = {
  product: Product;
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

const productName = (name: string): string => {
  let pName = name;
  if (name == 'コーンポータージュ') pName = 'コンポタ';
  return pName;
};

const productTemp = (id: number): string => {
  let className = 'p-vm__product-hot';
  if (id < 7) return 'p-vm__product-cold';
  return className;
};

const Product: FC<Props> = ({ product }) => {
  return (
    <>
      <img
        className="p-vm__product"
        src={require(`../images/product-${product.id}.svg`)}
      />
      <div className="p-vm__product-name">{productName(product.name)}</div>
      <div className={productTemp(product.id)}>{product.price}</div>
    </>
  );
};

export default Product;
