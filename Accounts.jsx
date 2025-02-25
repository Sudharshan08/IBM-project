import React from 'react';

    function Accounts() {
      // Dummy data for accounts
      const accountsData = [
        { id: 1, name: 'Checking Account', balance: 5000.00, type: 'Checking' },
        { id: 2, name: 'Savings Account', balance: 15000.00, type: 'Savings' },
        { id: 3, name: 'Credit Card', balance: -2000.00, type: 'Credit Card' }
      ];

      return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <div className="bg-white shadow rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Accounts</h2>
            <ul>
              {accountsData.map(account => (
                <li key={account.id} className="py-2 border-b last:border-b-0">
                  <div className="flex justify-between">
                    <div>
                      <span className="font-semibold">{account.name}</span>
                      <p className="text-gray-500">{account.type}</p>
                    </div>
                    <span>${account.balance.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default Accounts;
