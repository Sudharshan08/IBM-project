import React from 'react';

    function AccountSummary() {
      // Dummy data for account summary
      const accountData = [
        { id: 1, name: 'Checking Account', balance: 5000.00 },
        { id: 2, name: 'Savings Account', balance: 15000.00 },
        { id: 3, name: 'Credit Card', balance: -2000.00 }
      ];

      return (
        <div className="bg-white shadow rounded-md p-4">
          <h2 className="text-lg font-semibold mb-2">Account Summary</h2>
          <ul>
            {accountData.map(account => (
              <li key={account.id} className="py-2 border-b last:border-b-0">
                <div className="flex justify-between">
                  <span>{account.name}</span>
                  <span>${account.balance.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default AccountSummary;
