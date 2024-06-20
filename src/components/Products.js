import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    getProducts(data)

  });
  },[])

  const Cards = products.map(product => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} style={{width: "100px", height:"130px"}}/>
      <Card.Body>
        <Card.Title>{product.category}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
  ))  
  
  return (
    <>
    <h1>Page</h1>
    <div className="row">
      {Cards}
    </div>
    </>
  )
}

export default Product