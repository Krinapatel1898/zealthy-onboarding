// src/components/Layout.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const showNav = !['/'].includes(location.pathname); // Hide on Step 1

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] text-white">
      {showNav && (
        <nav className="bg-[#113c51] p-4 flex justify-between items-center shadow-lg">
          <h1 className="text-xl font-bold text-yellow-400">Zealthy Portal</h1>
          <div className="space-x-4">
            <Link to="/admin" className="hover:underline text-sm">Admin</Link>
            <Link to="/data" className="hover:underline text-sm">Data</Link>
          </div>
        </nav>
      )}

      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
