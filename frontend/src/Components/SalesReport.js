import React from 'react';

const SalesReport = ({ totalSales, eachSales, purchasedProductId }) => {
  const cnameEach = (index) => {
    let cn = '';
    if (index === purchasedProductId - 1) {
      cn = 'p-vm__sales-purchaesd';
    }
    return cn;
  };

  const cnameTotal = (id) => {
    let cn = '';
    if (id !== '') {
      cn = 'p-vm__sales-purchaesd';
    }
    return cn;
  };

  return (
    <div className="p-vm__sales">
      <table>
        <tbody>
          <tr>
            <th>商品</th>
            <th>総売上(円)</th>
            <th>総販売数(本)</th>
          </tr>
          <tr className={cnameTotal(purchasedProductId)}>
            <td>合計</td>
            <td>{totalSales.total_sales}</td>
            <td>{totalSales.total_counts}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <th>商品</th>
            <th>売上(円)</th>
            <th>販売数(本)</th>
          </tr>
          {eachSales.map((sales, index) => (
            <tr key={sales.id} className={cnameEach(index)}>
              <td>{sales.name}</td>
              <td>{sales.sales}</td>
              <td>{sales.counts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
