import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './Data';
import Cards2 from './Cards2';

const ProductDetails = () => {
  const params = useParams();

  const productDetails = data.find((product) => product.id === parseInt(params.id, 10));

  if (!productDetails) {
   
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>Product Id: {params.id}</div>


      <Cards2
        title={productDetails.title}
        image={productDetails.image}
        description={productDetails.description}
        price={productDetails.price}
        category={productDetails.category}
        rating={productDetails.rating}
      />
    </div>
  );
};

export default ProductDetails;
