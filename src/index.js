import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import ProductTable from './Components/ProductTable';

const productArray = [
  {
    category: `electonics`,
    price: 1000,
    name: `Iphone`,
  },
  {
    category: `electonics`,
    price: 1000,
    name: `samsung smart tv`,
  },
  {
    category: `Clothes`,
    price: 250,
    name: `coat for women`,
  },
  {
    category: `Clothes`,
    price: 99,
    name: `Jeans for men`,
  },
];
ReactDOM.render(
  <React.StrictMode>
    <ProductTable product={productArray} />
  </React.StrictMode>,
  document.getElementById('root')
);
