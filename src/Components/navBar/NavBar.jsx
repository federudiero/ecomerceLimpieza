import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { hideAlert } from '../../redux/actions'; // Importa la acción para ocultar la alerta
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HomeIcon from '@mui/icons-material/Home';

import style from './NavBar.module.css';

function NavBar() {
  const alertMessage = useSelector(state => state.alertMessage);
  const dispatch = useDispatch();

  const handleAlertClose = () => {
    dispatch(hideAlert());
  };

  return (
    <div className={style.containerNavBar}>
      <div className={`${style.menu} mx-auto md:mx-0`}>
        <Link to="/" className="btn" style={{ background: '#ffe600', color: 'black' }}>
          <HomeIcon/>
        </Link>
        <Link to="/nosotros" className="btn btn-ghost text-xl">
          Nosotros
        </Link>
        
        <Link to="/contacto" className="btn btn-ghost text-xl">
          Contacto
        </Link>
        <Link
        to="/carrito"
          className="btn"
          style={{ background: '#ffe600', color: 'black', position: 'relative' }}
          onClick={handleAlertClose} // Ocultar la alerta al navegar al carrito
        >
          <ShoppingCartIcon />
          {alertMessage && (
            <div className={style.alert}>
              {alertMessage}
              <button onClick={handleAlertClose} style={{ position: 'absolute', top: '5px', right: '5px' }}>
                <HighlightOffIcon />
              </button>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
