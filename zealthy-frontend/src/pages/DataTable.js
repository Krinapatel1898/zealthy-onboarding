import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-[#113c51] p-6 rounded-xl shadow-lg text-white overflow-x-auto">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">User Submissions</h2>

        <table className="table-auto w-full border border-gray-600 text-sm text-white">
          <thead className="bg-gray-800 text-yellow-300">
            <tr>
              <th className="border border-gray-600 px-4 py-2 w-[50px]">ID</th>
              <th className="border border-gray-600 px-4 py-2 w-[220px]">Email</th>
              <th className="border border-gray-600 px-4 py-2 w-[220px]">About Me</th>
              <th className="border border-gray-600 px-4 py-2 w-[130px]">Birthdate</th>
              <th className="border border-gray-600 px-4 py-2 w-[200px]">Street</th>
              <th className="border border-gray-600 px-4 py-2 w-[120px]">City</th>
              <th className="border border-gray-600 px-4 py-2 w-[130px]">State</th>
              <th className="border border-gray-600 px-4 py-2 w-[90px]">Zip</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-300">No data found</td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u.Id} className="bg-[#0f2f40] hover:bg-[#12384e]">
                  <td className="border border-gray-600 px-4 py-2 text-center">{u.Id}</td>
                  <td className="border border-gray-600 px-4 py-2">{u.Email}</td>
                  <td className="border border-gray-600 px-4 py-2">{u.AboutMe}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{u.Birthdate?.substring(0, 10)}</td>
                  <td className="border border-gray-600 px-4 py-2">{u.StreetAddress}</td>
                  <td className="border border-gray-600 px-4 py-2">{u.City}</td>
                  <td className="border border-gray-600 px-4 py-2">{u.State}</td>
                  <td className="border border-gray-600 px-4 py-2 text-center">{u.Zip}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
