import React from 'react';

const productName = (name) => {
  let pName = name;
  if (name == 'コーンポータージュ') pName = 'コンポタ';
  return pName;
};

const productTemp = (id) => {
  let className = 'p-vm__product-hot';
  if (id < 7) return 'p-vm__product-cold';
  return className;
};

const Product = ({ product }) => {
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
