import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold">📒 Transactions</h2>
      <ul>
        {transactions.map((t, i) => (
          <li key={i} className="border-b py-1">
            {t.name} - ₹{Number(t.amount).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;