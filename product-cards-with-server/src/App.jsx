import * as React from 'react'
import './App.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartComponent from './Components/CartComponent';
import FormComponent from './Components/FormComponent';
import OutputComponent from './Components/OutputComponent';



const App = () => {
  const [products, setProducts] = React.useState([])
  const [showCart, setShowCart] = React.useState(false)
  const [cart, setCart] = React.useState([])

  async function send(product) {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }

    const res = await fetch("http://localhost:4000/", options)
    const data = await res.json()

    setProducts(data.products)
  }
 
  return (
    <div className="App">
      <button className='showCart' onClick={() => setShowCart(true)} ><ShoppingCartIcon /></button>

      {showCart && <CartComponent setShowCart={setShowCart} cart={cart} setCart={setCart} />}

      <FormComponent send={send}/>
      
      <OutputComponent 
        products={products} 
        setProducts={setProducts}
        cart={cart} 
        setCart={setCart} 
      />
    </div>
  );
}

export default App;
