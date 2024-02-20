import {  useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch} from 'react-redux';
import { remove } from './store/cartSlice';
import LoadingBar from 'react-top-loading-bar'
import {useRef} from 'react';
const Cart=()=>{
  
    const products=useSelector(state=>state.cart);
    const dispatch=useDispatch();
    const removecart=(id)=>{
     
      return(
        dispatch(remove(id))
      )


    }
    const card = products.map((product) => (
      <div className="col-md-33" key={product.id}>
        <Card style={{ width: '18rem' }} className='h-100,'>
          <div className='text-center'>
            <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} className='text-center'/>
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger" onClick={() => removecart(product.id)}>Delete from Cart</Button>
          </Card.Footer>
        </Card>
      </div>
    
    
    ));
    return(
        <>
        <h1>Your shopping</h1>
       
        {card}
        </>
    )

}
export default Cart;