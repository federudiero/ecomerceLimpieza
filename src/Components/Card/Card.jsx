import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedProductId, updateProductQuantity } from '../../redux/actions'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart } from '../../redux/actions';

function Card({ id, nombre, category, precio, imagen, stock }) {
  console.log(id, nombre, category,precio, imagen, stock);
  const dispatch = useDispatch();
  const selectedProductQuantity = useSelector(state => state.selectedProductQuantity);
  const [count, setCount] = useState(selectedProductQuantity);

  const handleViewDetails = () => {
    dispatch(setSelectedProductId(id));
  };


  const handleAddToCart = () => {
    const product = { id, nombre, category, precio, imagen, stock };
    dispatch(addToCart(product));
    alert('Producto agregado al carrito');
  };

  return (
    <div className="card w-56 bg-base-100 shadow-md m-2 flex flex-col ">
      <div className="w-full h-44 overflow-hidden flex items-center justify-center border-primary">
        <img className="w-full h-full object-cover" src={imagen} alt="Producto" />
      </div>
      <div className="card-body" style={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        padding: 'var(--padding-card, 1rem)',
        gap: '0.1rem',
        justifyContent: 'space-evenly'
      }}>
        <h2 className="text-white ">{nombre}</h2>
        <h2 className="text-white mb-2">$ {precio}</h2>
        <h4 className=" mb-2">{category}</h4>
      </div>
      <Link
  to={`/product-detail/${id}`}
  className="btn"
  onClick={handleViewDetails}
  style={{ background: '#ffe600' , color: 'black',}} // Establecer el color usando el código hexadecimal
>
  Ver detalle
</Link>
       
<button
        className="btn"
        onClick={handleAddToCart}
        style={{ background: '#ffe600' , color: 'black',}} // Establecer el color usando el código hexadecimal
      >
        <AddShoppingCartIcon/>
        Agregar al carrito
      </button>
       
    </div>
  );
}

export default Card;
