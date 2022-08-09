import React from 'react';
import Nav from './blog/Nav';

const Layout = ({ children, categories }) => {
  return (
    <>
      <Nav categories={categories} />
      {children}
    </>
  );
};

export default Layout;
