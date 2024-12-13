import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import './Layout.css';

function Layout() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;