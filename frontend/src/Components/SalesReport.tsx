import React from 'react';

type Props = {
  totalSales: TotalSales
  eachSales: EachSales
  purchasedProductId: number
}

type EachSales = Sales[]

type Sales = {
  id: number;
  name: string;
  sales: number;
  counts: number;
};

type TotalSales = {
  total_sales: number;
  total_counts: number;
};

const SalesReport = (props: Props) => {
  const cnameEach = (index: number): string => {
    let cn = '';
    if (index === props.purchasedProductId - 1) {
      cn = 'p-vm__sales-purchaesd';
    }
    return cn;
  };

  const cnameTotal = (id: string | number): string => {
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
          <tr className={cnameTotal(props.purchasedProductId)}>
            <td>合計</td>
            <td>{props.totalSales.total_sales}</td>
            <td>{props.totalSales.total_counts}</td>
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
          {props.eachSales.map((sales: Sales, index: number) => (
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
