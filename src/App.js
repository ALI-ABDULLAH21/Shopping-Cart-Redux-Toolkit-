import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './Products';
import Cart from './Cart';
import Nav from './Nav';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Nav/>
    
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
