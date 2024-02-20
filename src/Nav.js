import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useRef } from 'react';

const Nav = () => {
  const cartprod = useSelector(state => state.cart);
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    // Reset loading bar on each navigation
    ref.current.complete();
  }, [location.pathname]);

  return (
    <div className='outerclass'>
      <div>
        <h2 style={{ color: 'purple' }}>Shoptico.</h2>
      </div>
      <div className='innerclass'>
        <div>
          <p style={{ color: 'purple' }}> <Link to="/" style={{ color: 'purple' , textDecoration: 'none'}}>Products</Link></p>
        </div>
        <div>
          <p>
            <Link to="/cart" style={{ color: 'purple', textDecoration: 'none' }}>
              <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'purple' }} />
              {cartprod.length}
            </Link>
          </p>
        </div>
      </div>
      <LoadingBar color='purple' ref={ref} />
    </div>
  );
}

export default Nav;
