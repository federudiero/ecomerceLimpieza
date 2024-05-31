import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Fab, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate('/carrito');
  };

  // Si estamos en la ruta /carrito, no renderizamos el botón
  if (location.pathname === '/carrito') {
    return null;
  }

  return (
    <Tooltip title="Ir al carrito" aria-label="carrito">
      <Fab
        color="primary"
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: 120,
          right: 20,
          zIndex: 1000,
          height: '70px',
          width: '70px',
        }}
      >
        <ShoppingCartIcon
          style={{
            height: '40px',
            width: '40px',
          }}
        />
      </Fab>
    </Tooltip>
  );
};

export default CartButton;

