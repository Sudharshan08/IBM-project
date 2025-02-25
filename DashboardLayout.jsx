import React from 'react';
    import AccountSummary from './AccountSummary';
    import TransactionHistory from './TransactionHistory';
    import PaymentInitiation from './PaymentInitiation';
    import Navbar from './Navbar';
    import Sidebar from './Sidebar';

    function DashboardLayout() {
      return (
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <AccountSummary />
                <TransactionHistory />
                <PaymentInitiation />
              </div>
            </main>
          </div>
        </div>
      );
    }

    export default DashboardLayout;
