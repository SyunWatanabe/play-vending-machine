import React, { FC } from 'react';

type Props = {
  money: number;
};

const MoneyDisplay: FC<Props> = ({ money }) => {
  return <div className="p-vm__money-display">¥ {money}</div>;
};

export default MoneyDisplay;
