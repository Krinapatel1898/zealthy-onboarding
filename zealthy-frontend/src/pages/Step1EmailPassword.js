import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Step1EmailPassword = () => {
  const [mode, setMode] = useState('login'); // or 'create'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      if (mode === 'create') {
        const res = await axios.post('http://localhost:3001/user', { email, password });
        localStorage.setItem('userId', res.data.userId);
      } else {
        const res = await axios.get('http://localhost:3001/user-by-email', { params: { email } });
        if (res.data.Password !== password) {
          setError('Incorrect password');
          return;
        }
        localStorage.setItem('userId', res.data.Id);
      }

      navigate('/step2');
    } catch (err) {
      setError(err.response?.data || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#092635] to-[#0b3a4e] flex items-center justify-center px-4">
      <div className="bg-[#113c51] p-8 rounded-xl shadow-lg text-white w-full max-w-md text-center">
        {/* Logo Section */}
        <div className="mb-6">
            <div className="text-4xl font-bold mb-1">
              ZEALTHY
            </div>
          <p className="text-gray-300 text-sm">Onboarding Portal</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setMode('login')}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              mode === 'login'
                ? 'bg-yellow-400 text-black'
                : 'border border-yellow-400 text-yellow-400'
            }`}
          >
            LOGIN
          </button>
          <button
            onClick={() => setMode('create')}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              mode === 'create'
                ? 'bg-yellow-400 text-black'
                : 'border border-yellow-400 text-yellow-400'
            }`}
          >
            SIGN UP
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full mt-4 bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            {mode === 'create' ? 'Create Account' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Step1EmailPassword;
