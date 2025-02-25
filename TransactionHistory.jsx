import React from 'react';

    function TransactionHistory() {
      // Dummy data for transaction history
      const transactions = [
        { id: 1, date: '2024-07-20', description: 'Grocery Store', amount: -50.00 },
        { id: 2, date: '2024-07-19', description: 'Salary Deposit', amount: 3000.00 },
        { id: 3, date: '2024-07-18', description: 'Online Shopping', amount: -100.00 }
      ];

      return (
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
          <ul>
            {transactions.map(transaction => (
              <li key={transaction.id} className="py-2 border-b last:border-b-0">
                <div className="flex justify-between">
                  <div>
                    <span>{transaction.date}</span>
                    <p className="text-gray-500">{transaction.description}</p>
                  </div>
                  <span>${transaction.amount.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default TransactionHistory;
