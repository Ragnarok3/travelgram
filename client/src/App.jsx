import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Activities from './pages/Activities';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { AuthProvider, AuthContext } from './context/AuthContext';
import './App.scss';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/place/:id" element={<Details />} />
              <Route path="/v1/activities/:id" element={<PrivateRoute element={<Activities />} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <LoginButton />
            <LogoutButton />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
