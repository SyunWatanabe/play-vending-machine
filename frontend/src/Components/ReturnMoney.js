import React from 'react';

const ReturnMoney = ({ change, handleCollectChange }) => {
  return (
    <>
      <div className="p-vm__dispensing-slot">
        返却
        <div className="p-vm__change-text">¥{change}</div>
      </div>
      <a
        href="javascript:void(0)"
        className="p-vm__btn-collect-change"
        onClick={handleCollectChange}
      >
        回収
      </a>
    </>
  );
};

export default ReturnMoney;
