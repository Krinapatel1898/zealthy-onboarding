import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Step1EmailPassword from './pages/Step1EmailPassword';
import Step2Details from './pages/Step2Details';
import Step3Details from './pages/Step3Details';
import AdminConfig from './pages/AdminConfig';
import DataTable from './pages/DataTable';
import Success from './pages/Success';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Step1EmailPassword />} />
          <Route path="/step2" element={<Step2Details />} />
          <Route path="/step3" element={<Step3Details />} />
          <Route path="/admin" element={<AdminConfig />} />
          <Route path="/data" element={<DataTable />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
