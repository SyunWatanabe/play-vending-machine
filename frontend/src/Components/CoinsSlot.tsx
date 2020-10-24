import React, { FC, useState } from 'react';

type Props = {
  onMoneyChange: (money: React.ReactText) => void;
};

const CoinsSlot: FC<Props> = ({ onMoneyChange }) => {
  const [coin, setCoin] = useState<number | string>(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    onMoneyChange(coin);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCoin(Number(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={coin} onChange={handleChange}>
        <option value="0">0</option>
        <option value="10">10</option>
        <option value="50">50</option>

        <option value="100">100</option>
        <option value="500">500</option>
      </select>
      <button type="submit">投入</button>
    </form>
  );
};

export default CoinsSlot;
