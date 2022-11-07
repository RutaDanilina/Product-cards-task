import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductCard = ({product, index, setProducts, cart, setCart}) => {

    async function removeProduct() {
        const res= await fetch("http://localhost:4000/remove/" + index)
        const data= await res.json()

        setProducts(data.products)
    }

    async function addToCart(){
      const newCard = [...cart, product]
      setCart(newCard)
    }


  return (
    <div className='productCard'>
        <img src={product.photo} alt={product.title} />

        <h3>{product.title}</h3>
        <h5>{product.price} €</h5>

        <div>
            <button onClick={addToCart} className='addToCartBtn'><ShoppingCartIcon fontSize='small'  /></button>
            <button onClick={removeProduct} className='deleteBtn'><DeleteIcon fontSize='small' /></button>
        </div>

    </div>
  )
}

export default ProductCard