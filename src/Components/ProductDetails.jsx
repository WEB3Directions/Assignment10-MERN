import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from './Data';
import Cards2 from './Cards2';

const ProductDetails = () => {
  const params = useParams();

  // Filter the product based on the ID from the URL params
  const productDetails = data.find((product) => product.id === parseInt(params.id, 10));

  if (!productDetails) {
    // Handle the case where the product is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>Product Id: {params.id}</div>

      {/* Pass the productDetails to the Cards2 component */}
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
