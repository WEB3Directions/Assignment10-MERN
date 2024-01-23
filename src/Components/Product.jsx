import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './Data';
import Cards from './Cards';

const Product = () => {
  return (
    <div className="card-container">
      {data.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <Cards
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
          />
        </Link>
      ))}
    </div>
  );
};

export default Product;



