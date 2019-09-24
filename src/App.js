import React from 'react';
import Layout from 'layouts/Layout';
import { Router } from '@reach/router';
import CreateProduct from 'pages/CreateProduct';
import Products from 'pages/Products';

function App() {
  return (
    <Layout>
      <Router>
        <Products path="/" />
        <CreateProduct path="/create-products" />
      </Router>
    </Layout>
  );
}

export default App;
