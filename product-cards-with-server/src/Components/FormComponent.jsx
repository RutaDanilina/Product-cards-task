import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';


const FormComponent = ({send}) => {

  const photoRef = React.useRef()
  const titleRef = React.useRef()
  const priceRef = React.useRef()

  const addProduct = () => {
    const product = {
      photo: photoRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value
    }

    send(product)

    photoRef.current.value= ""
    titleRef.current.value= ""
    priceRef.current.value= ""
  }

  return (
<div className='productForm'>
  <input ref={photoRef} type="text" placeholder="Add Photo" />
  <input ref={titleRef} type="text" placeholder="Product title" />
  <input ref={priceRef} type="text" placeholder="Product price" />
  <button onClick={addProduct}><AddIcon /></button>
</div>
  );
}
 export default FormComponent