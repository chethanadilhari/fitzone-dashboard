import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Membership from './pages/Membership';

const App = () => {
 return (
<Router>
  <Routes>
  <Route path="/login" element={<Login/>} />
  <Route path="/register" element={<Register/>} />
  <Route path="*" element={
    <Layout>
      <Routes>
        <Route path="/" element={<Overview/>} />
        <Route path="/membership" element={<Membership/>} />
        <Route path="/" element={<Overview/>} />
        <Route path="/" element={<Overview/>} />
        <Route path="/" element={<Overview/>} />
        <Route path="/" element={<Overview/>} />

      </Routes>
    </Layout>
  } />
  </Routes>
</Router>
 )
}
export default App;
