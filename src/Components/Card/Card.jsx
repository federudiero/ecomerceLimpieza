import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedProductId, addToCart } from '../../redux/actions'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Card({ id, nombre, category, precio, url }) {
  const dispatch = useDispatch();

  const handleViewDetails = () => {
    dispatch(setSelectedProductId(id));
  };

  const handleAddToCart = () => {
    const product = { id, nombre, category, precio, url };
    dispatch(addToCart(product));
  
  };

  return (
    <div className="card w-56 bg-gray-900 shadow-md m-2 flex flex-col" style={{ borderRadius: '10px' }}>
      <div className="w-full h-44 overflow-hidden flex items-center justify-center border-primary" style={{ borderRadius: '10px 10px 0 0' }}>
        <img className="w-full h-full object-cover" src={url} alt="Producto" style={{ borderRadius: '10px 10px 0 0' }} />
      </div>
      <div className="card-body" style={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        padding: 'var(--padding-card, 1rem)',
        gap: '0.1rem',
        justifyContent: 'space-evenly',
        borderRadius: '0 0 10px 10px'
      }}>
        <h2 className="text-white">{nombre}</h2>
        <h2 className="text-white mb-2">$ {precio}</h2>
        <h4 className="text-white mb-2">{category}</h4>
      </div>
      <button
        className="btn"
        onClick={handleAddToCart}
        style={{ background: '#f5f5f5', color: 'black', borderRadius: '10px' , marginBottom: '10px'}}
      >
        <AddShoppingCartIcon/>
        Agregar al carrito
      </button>
      <Link
        to={`/product-detail/${id}`}
        className="btn"
        onClick={handleViewDetails}
        style={{ background: '#0082be', color: 'black', borderRadius: '10px' }}
      >
        Ver detalle
      </Link>
    </div>
  );
}

export default Card;

