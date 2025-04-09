import React, { useEffect, useState } from 'react';
import axios from 'axios';

const components = ['about_me', 'birthdate', 'address'];

const AdminConfig = () => {
  const [config, setConfig] = useState({});

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get('http://localhost:3001/admin/config');
        const map = {};
        res.data.forEach(item => {
          map[item.ComponentName] = item.PageNumber;
        });
        setConfig(map);
      } catch (err) {
        console.error('Failed to load config:', err);
      }
    };

    fetchConfig();
  }, []);

  const handleChange = (name, value) => {
    setConfig(prev => ({
      ...prev,
      [name]: parseInt(value)
    }));
  };

  const handleSave = async () => {
    const payload = Object.entries(config).map(([component_name, page_number]) => ({
      component_name,
      page_number
    }));

    try {
      await axios.post('http://localhost:3001/admin/config', payload);
      alert('✅ Config saved successfully!');
    } catch (err) {
      alert('❌ Failed to save config');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] flex items-center justify-center px-4">
      <div className="bg-[#113c51] p-8 rounded-xl shadow-lg w-full max-w-2xl text-white">
        <h2 className="text-2xl font-bold text-yellow-400 text-center mb-6">
          🔧 Admin Config Manager
        </h2>

        <div className="space-y-6">
          {components.map(name => (
            <div key={name} className="flex justify-between items-center">
              <span className="capitalize font-medium">{name.replace('_', ' ')}</span>
              <select
                value={config[name] || 1}
                onChange={(e) => handleChange(name, e.target.value)}
                className="bg-gray-800 text-white border border-gray-500 px-4 py-1 rounded"
              >
                <option value="2">Page 2</option>
                <option value="3">Page 3</option>
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="mt-8 w-full bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Save Config
        </button>
      </div>
    </div>
  );
};

export default AdminConfig;
