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
    <div className="dark card w-56 bg-gray-900 shadow-md m-2 flex flex-col">
      <div className="w-full h-44 overflow-hidden flex items-center justify-center border-primary">
        <img className="w-full h-full object-cover" src={url} alt="Producto" />
      </div>
      <div className="card-body" style={{
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: 'column',
        padding: 'var(--padding-card, 1rem)',
        gap: '0.1rem',
        justifyContent: 'space-evenly'
      }}>
        <h2 className="text-white">{nombre}</h2>
        <h2 className="text-white mb-2">$ {precio}</h2>
        <h4 className="text-white mb-2">{category}</h4>
      </div>
      <Link
        to={`/product-detail/${id}`}
        className="btn"
        onClick={handleViewDetails}
        style={{ background: '#0082be', color: 'black', marginBottom: '10px' }}
      >
        Ver detalle
      </Link>
      <button
        className="btn"
        onClick={handleAddToCart}
        style={{ background: '#f5f5f5', color: 'black' }}
      >
        <AddShoppingCartIcon/>
        Agregar al carrito
      </button>
    </div>
  );
}

export default Card;
