import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cart = () => {
  const cartProducts = useSelector(state => state.CartSlice);
  const Cart = cartProducts.map(product => (
    <div className="col-md-12" style={{marginBottom: "10px"}}>
      <Card style={{ width: '18rem' }} key={product.id} className="h-100">
        <div className="text-center">
      <Card.Img variant="top" src={product.images[0]} style={{width: "100px", height:"130px", marginTop: "30px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         ${product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{background: "#fff" }}>
      </Card.Footer>
    </Card>
    </div>
  ))  
  return (
    <>
    <h2>Cart</h2>
    {Cart}
    </>
  )
}

export default Cart;