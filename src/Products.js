import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/* import { Card, Button } from 'react-bootstrap'; */
import { useDispatch} from 'react-redux';
import { add } from './store/cartSlice';


const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const addtocart=(product)=>{
    return(
        dispatch(add(product))


    )

  }

  const card = products.map((product) => (
    <div key={product.id} className="col-md-3">
      <Card style={{ width: '18rem' }} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}$
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addtocart(product)}>Add to cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  
  return (
    <>
      <h1>Products List</h1>
      
        <div className='row'>
      {card}
      
        </div>
      
    </>
  );
};

export default Products;
