import React, { useState, useEffect, useContext } from 'react';
import SalesReport from './Components/SalesReport';
import MainContainer from './Components/MainContainer';
import MobileView from './Components/MobileView';
import './VendingMachine.scss';
import mobileCheck from './mobileCheck';

export const DepositMoneyContext = React.createContext();
const VendingMachine = () => {
  const ENDPOINT =
    process.env.REACT_APP_ENDPOINT ||
    'https://play-vending-machine.herokuapp.com';

  const [products, setProducts] = useState([]);
  const [totalSales, setTotalSales] = useState([]);
  const [eachSales, setEachSales] = useState([]);
  const [purchasedProductId, setPurchasedProductId] = useState('');
  const [depositMoney, setMoney] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${ENDPOINT}/api/v1/products`);
      const json = await response.json();
      setProducts(json);
    }

    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    async function fetchTotalSales() {
      const response = await fetch(`${ENDPOINT}/api/v1/purchases/total_sales`);
      const json = await response.json();
      const sales = json.total_sales;
      const counts = json.total_counts;
      setTotalSales({ total_sales: sales, total_counts: counts });
    }
    fetchTotalSales();
  }, [purchasedProductId]);

  useEffect(() => {
    async function fetchEachSales() {
      const response = await fetch(`${ENDPOINT}/api/v1/purchases/each_sales`);
      const json = await response.json();
      const sales = json.each_sales;
      setEachSales(sales);
    }
    fetchEachSales();
  }, [purchasedProductId]);

  const handleMoneyChange = (selected) => {
    setMoney(depositMoney + selected);
  };

  const handleReturnMoney = () => {
    setMoney(0);
    setChange(change + depositMoney);
  };

  const handlePurchase = (product_id, slot_id, purchase_price) => {
    const data = { product_id, slot_id, purchase_price };
    postData(`${ENDPOINT}/api/v1/purchases`, data);
    setTimeout(() => {
      setMoney(depositMoney - purchase_price);
      // wait for 3s to keep showing buyable sign(blue color) until purchase action is finished
    }, 2000);
    purchaseProduct(product_id, purchase_price);
  };

  const handleCollectChange = () => {
    setChange(0);
  };

  function postData(url, data) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  function purchaseProduct(productId, purchasePrice) {
    setPurchasedProductId(productId);

    const returnBtn = document.getElementById('return-btn');
    // stop click action
    returnBtn.style.pointerEvents = 'none';

    // change HTML collection to Array for map
    let PurchaseBtns = Array.from(
      document.getElementsByClassName('p-vm__purchase-btn')
    );

    PurchaseBtns.map((purchaseBtn, index) => {
      purchaseBtn.disabled = true;

      if (index == productId - 1) {
        purchaseBtn.classList =
          'p-vm__purchase-btn p-vm__purchase-btn--buyable';
      } else {
        purchaseBtn.classList = 'p-vm__purchase-btn';
      }
    });

    setTimeout(() => {
      const BuyableProductsId = products
        .filter((product) => product.price <= depositMoney - purchasePrice)
        .map((product) => product.id);
      BuyableProductsId.map((id) => {
        PurchaseBtns[id - 1].disabled = false;
        PurchaseBtns[id - 1].classList =
          'p-vm__purchase-btn p-vm__purchase-btn--buyable';
      });

      returnBtn.style.pointerEvents = 'auto';
      setPurchasedProductId('');
    }, 2000); // wait for css flash animation
  }

  const firstLine = products.filter((product, index) => index < 5);
  const secondLine = products.filter((product, index) => index > 4);
  return mobileCheck() == true ? (
    <MobileView />
  ) : (
    <DepositMoneyContext.Provider value={depositMoney}>
      <div className="layout">
        <MainContainer
          firstLine={firstLine}
          secondLine={secondLine}
          depositMoney={depositMoney}
          change={change}
          purchasedProductId={purchasedProductId}
          handleMoneyChange={handleMoneyChange}
          handleReturnMoney={handleReturnMoney}
          handlePurchase={handlePurchase}
          handleCollectChange={handleCollectChange}
        />
        <SalesReport
          totalSales={totalSales}
          eachSales={eachSales}
          purchasedProductId={purchasedProductId}
        />
      </div>
    </DepositMoneyContext.Provider>
  );
};
export default VendingMachine;
