import React from 'react'
import ProductCard from './ProductCard'

const OutputComponent = ({products, setProducts, cart, setCart}) => {
  return (
    <div className='outputComponent'>
      {products.map((product, i) => 
        <ProductCard 
          key={i} 
          index={i} 
          product={product} 
          setProducts={setProducts} 
          cart={cart}
          setCart={setCart}
        /> )}
    </div>
  )
}

export default OutputComponent