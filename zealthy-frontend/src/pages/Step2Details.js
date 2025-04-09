import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Step2Details = () => {
  const [components, setComponents] = useState([]);
  const [formData, setFormData] = useState({
    AboutMe: '',
    Birthdate: '',
    StreetAddress: '',
    City: '',
    State: '',
    Zip: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await axios.get('http://localhost:3001/admin/config');
        const step2Fields = res.data.filter(c => c.PageNumber === 2);
        setComponents(step2Fields.map(c => c.ComponentName));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('step2', JSON.stringify(formData));
    navigate('/step3');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] flex items-center justify-center px-4">
      <div className="bg-[#113c51] p-8 rounded-xl shadow-lg text-white w-full max-w-md">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-400">Step 2</h2>
          <p className="text-sm text-gray-300">Additional Information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {components.includes('about_me') && (
            <div>
              <label className="block mb-1">About Me</label>
              <textarea
                name="AboutMe"
                rows="4"
                className="w-full bg-gray-900 border border-gray-600 text-white rounded px-3 py-2"
                onChange={handleChange}
                value={formData.AboutMe}
              />
            </div>
          )}

          {components.includes('birthdate') && (
            <div>
              <label className="block mb-1">Birthdate</label>
              <input
                type="date"
                name="Birthdate"
                className="w-full bg-gray-900 border border-gray-600 text-white rounded px-3 py-2"
                onChange={handleChange}
                value={formData.Birthdate}
              />
            </div>
          )}

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
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step2Details;
