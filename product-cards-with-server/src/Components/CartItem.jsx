import * as React from 'react'


const CartItem = ({item}) => {


  return (
 
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px', borderBottom: '1px solid #51103a5c', padding: '5px'}}>
        <img className='cartImg' src={item.photo} alt={item.title} />
        <h5>{item.title}</h5>
        <h5>{item.price} €</h5>                
      </div>  

  )
}

export default CartItem