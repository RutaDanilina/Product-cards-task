import * as React from 'react';
import CartItem from './CartItem';



 const CartComponent = ({setShowCart, cart, setCart}) => {

    const countTotal = () => {
        let sum = 0
        cart.map( item => sum += Number(item.price))
        return sum
      }

  
    return (
      <div className='cart'>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px'}}>
            <div></div>
            <div onClick={()=> setShowCart(false)}>X</div>
        </div>
        <div>
        <h4 style={{ margin: '20px'}}>Total: {countTotal()} €</h4>
      </div>
        {cart.map( (item, i) => <CartItem key={i} item={item} />)}

      </div>
    );
}

export default CartComponent