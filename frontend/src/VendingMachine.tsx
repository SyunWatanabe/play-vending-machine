import React, { useState, useEffect } from 'react';
import Product from './Components/Product';
import SalesReport from './Components/SalesReport';
import MainContainer from './Components/MainContainer';
import MobileView from './Components/MobileView';
import './VendingMachine.scss';
import mobileCheck from './mobileCheck';

export const DepositMoneyContext = React.createContext(0);

type ProductType = React.ComponentProps<typeof Product>['product'];
type TotalSales = React.ComponentProps<typeof SalesReport>['totalSales'];

const VendingMachine = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalSales, setTotalSales] = useState<TotalSales>({
    total_sales: 0,
    total_counts: 0,
  });
  const [eachSales, setEachSales] = useState([]);
  const [purchasedProductId, setPurchasedProductId] = useState<string | number>(
    0
  );
  const [depositMoney, setMoney] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        'https://play-vending-machine.herokuapp.com/api/v1/products'
      );
      const json = await response.json();
      setProducts(json);
    }

    fetchProducts();
  }, [setProducts]);

  useEffect(() => {
    async function fetchTotalSales() {
      const response = await fetch(
        'https://play-vending-machine.herokuapp.com/api/v1/purchases/total_sales'
      );
      const json: TotalSales = await response.json();

      if (typeof json !== undefined) {
        const sales: number = json.total_sales;
        const counts: number = json.total_counts;
        const obj = { total_sales: sales, total_counts: counts };
        setTotalSales(obj);
      }
    }
    fetchTotalSales();
  }, [purchasedProductId]);

  useEffect(() => {
    async function fetchEachSales() {
      const response = await fetch(
        'https://play-vending-machine.herokuapp.com/api/v1/purchases/each_sales'
      );
      const json = await response.json();
      const sales = json.each_sales;
      setEachSales(sales);
    }
    fetchEachSales();
  }, [purchasedProductId]);

  const handleMoneyChange = (selected: string | number) => {
    if (typeof selected === 'number') {
      setMoney(depositMoney + selected);
    } else throw new Error('not number');
  };

  const handleReturnMoney = () => {
    setMoney(0);
    setChange(change + depositMoney);
  };

  const handlePurchase = (
    product_id: number,
    slot_id: number,
    purchase_price: number
  ) => {
    const data = { product_id, slot_id, purchase_price };
    postData(
      `https://play-vending-machine.herokuapp.com/api/v1/purchases`,
      data
    );
    setTimeout(() => {
      setMoney(depositMoney - purchase_price);
      // wait for 3s to keep showing buyable sign(blue color) until purchase action is finished
    }, 2000);
    purchaseProduct(product_id, purchase_price);
  };

  const handleCollectChange = () => {
    setChange(0);
  };

  function postData(url: string, data: any) {
    return fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  function purchaseProduct(productId: number, purchasePrice: number) {
    setPurchasedProductId(productId);

    const returnBtn = document.getElementById('return-btn');
    // stop click action
    if (returnBtn !== null) returnBtn.style.pointerEvents = 'none';

    // change HTML collection to Array for map
    const PurchaseBtns = (Array.from(
      document.getElementsByClassName('p-vm__purchase-btn')
    ) as unknown) as HTMLButtonElement[];

    PurchaseBtns.map((purchaseBtn: HTMLButtonElement, index: number) => {
      let Btn = purchaseBtn;
      Btn.disabled = true;

      if (index == productId - 1) {
        Btn.classList.value = 'p-vm__purchase-btn p-vm__purchase-btn--buyable';
      } else {
        Btn.classList.value = 'p-vm__purchase-btn';
      }
    });

    setTimeout(() => {
      const BuyableProductsId = products
        .filter((product) => product.price <= depositMoney - purchasePrice)
        .map((product) => product.id);
      BuyableProductsId.map((id) => {
        PurchaseBtns[id - 1].disabled = false;
        PurchaseBtns[id - 1].classList.value =
          'p-vm__purchase-btn p-vm__purchase-btn--buyable';
      });

      if (returnBtn !== null) returnBtn.style.pointerEvents = 'auto';
      setPurchasedProductId('');
    }, 2000); // wait for css flash animation
  }

  const firstLine = products.filter((_, index) => index < 5);
  const secondLine = products.filter((_, index) => index > 4);
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
