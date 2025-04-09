import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Step3Details = () => {
  const [components, setComponents] = useState([]);
  const [formData, setFormData] = useState({
    StreetAddress: '',
    City: '',
    State: '',
    Zip: '',
  });

  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get('http://localhost:3001/admin/config');
        const step3Fields = res.data.filter(c => c.PageNumber === 3);
        setComponents(step3Fields.map(c => c.ComponentName));
      } catch (err) {
        console.error('Error loading admin config:', err);
      }
    };

    fetchConfig();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const step2Data = JSON.parse(localStorage.getItem('step2')) || {};
      const finalData = { ...step2Data, ...formData };

      await axios.put(`http://localhost:3001/user/${userId}`, finalData);
      localStorage.removeItem('step2');
      navigate('/success');
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] flex items-center justify-center px-4">
      <div className="bg-[#113c51] p-8 rounded-xl shadow-lg text-white w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-400">Step 3</h2>
          <p className="text-sm text-gray-300">Final Information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {components.includes('address') && (
            <>
              <div>
                <label className="block mb-1">Street Address</label>
                <input
                  type="text"
                  name="StreetAddress"
                  className="w-full bg-gray-900 border border-gray-600 text-white rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.StreetAddress}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="City"
                  placeholder="City"
                  className="bg-gray-900 border border-gray-600 text-white rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.City}
                />
                <input
                  type="text"
                  name="State"
                  placeholder="State"
                  className="bg-gray-900 border border-gray-600 text-white rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.State}
                />
                <input
                  type="text"
                  name="Zip"
                  placeholder="Zip"
                  className="bg-gray-900 border border-gray-600 text-white rounded px-3 py-2"
                  onChange={handleChange}
                  value={formData.Zip}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full mt-4 bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step3Details;
