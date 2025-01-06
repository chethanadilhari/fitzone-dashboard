import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Layout from './components/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Membership from './pages/Membership';
import Support from './pages/Support';
import Classes from './pages/Classes';
import Settings from './pages/Settings';

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
        <Route path="/support" element={<Support/>} />
        <Route path="/classes" element={<Classes/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/" element={<Overview/>} />

      </Routes>
    </Layout>
  } />
  </Routes>
</Router>
 )
}
export default App;
