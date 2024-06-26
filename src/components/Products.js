import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import {getProducts} from "../store/ProductsSlice";
import StatusCode from "../utils/StatusCode";
const Product = () => {
  const dispatch = useDispatch();
  // const fakeurl1 = "https://api.escuelajs.co/api/v1/products";
  const { data: products, status } = useSelector(state => state.products)
  // console.log(data)
  // const [products, getProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts());
    // fetch(fakeurl1)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     getProducts(data);
    //   });
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if(status === StatusCode.LOADING){
    return <p>Loading...</p>
  }

  if(status ===  StatusCode.ERROR){
    return <p>something went wrong...</p>
  }

  const fakeurl1 = "https://fakestoreapi.com/products"
  const Cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card style={{ width: "18rem" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.images[0]}
            style={{ width: "100px", height: "130px", marginTop: "30px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "#fff" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Page</h1>
      <div className="row">{Cards}</div>
    </>
  );
};

export default Product;
