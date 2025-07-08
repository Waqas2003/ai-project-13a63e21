import React from 'react';
import axios from 'axios';

function ProductDetail({ match }) {
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    axios.get(`https://api.example.com/products/${match.params.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;