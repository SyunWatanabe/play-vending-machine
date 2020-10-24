import React, { FC, useState } from 'react';

type Props = {
  onMoneyChange: (money: React.ReactText) => void;
};

const BillsSlot: FC<Props> = ({ onMoneyChange }) => {
  const [bill, setBill] = useState<number | string>(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    onMoneyChange(bill);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setBill(Number(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={bill} onChange={handleChange}>
        <option value="0">0</option>
        <option value="1000">1000</option>
      </select>
      <button type="submit">投入</button>
    </form>
  );
};

export default BillsSlot;
