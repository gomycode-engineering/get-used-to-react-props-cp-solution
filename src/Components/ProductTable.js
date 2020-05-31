import React from 'react';
import PropTypes from 'prop-types';

const ProductTable = ({ product }) => {
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pr, key) => (
            <tr key={key}>
              <th scope='row'>{key}</th>
              <td>{pr.name}</td>
              <td>{pr.category}</td>
              <td>{pr.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = {
  product: PropTypes.object,
};

export default ProductTable;
