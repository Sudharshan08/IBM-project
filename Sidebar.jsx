import React from 'react';
    import { HomeIcon, CreditCardIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';
    import { Link } from 'react-router-dom';

    function Sidebar() {
      return (
        <div className="bg-gray-800 text-white w-64 flex-shrink-0">
          <div className="p-4">
            <h1 className="text-2xl font-semibold">BankName</h1>
          </div>
          <nav className="mt-6">
            <Link to="/" className="flex items-center py-2 px-4 hover:bg-gray-700">
              <HomeIcon className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <Link to="/accounts" className="flex items-center py-2 px-4 hover:bg-gray-700">
              <CreditCardIcon className="h-5 w-5 mr-3" />
              Accounts
            </Link>
            <Link to="/profile" className="flex items-center py-2 px-4 hover:bg-gray-700">
              <UserIcon className="h-5 w-5 mr-3" />
              Profile
            </Link>
            <a href="#" className="flex items-center py-2 px-4 hover:bg-gray-700">
              <CogIcon className="h-5 w-5 mr-3" />
              Settings
            </a>
          </nav>
        </div>
      );
    }

    export default Sidebar;
