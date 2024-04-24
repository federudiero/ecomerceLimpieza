 import React from 'react';
import { Link } from 'react-router-dom';
 import HomeIcon from '@mui/icons-material/Home';
 import LocalMallIcon from '@mui/icons-material/LocalMall';
import style from './NavBar.module.css';

function NavBar() {
  return (
    <div className={style.containerNavBar}>
      <div className={`${style.menu} mx-auto md:mx-0`}>
        {/* Agregamos la clase mx-auto para centrar horizontalmente en dispositivos pequeños */}
        <Link to="/" className="btn" style={{ background: '#ffe600', color: 'black' }}>
          <HomeIcon />
        </Link>
        <Link to="/nosotros" className="btn btn-ghost text-xl">
          Nosotros
        </Link>
        <Link to="/contacto" className="btn btn-ghost text-xl">
          Contacto
        </Link>
        <Link to="/carrito" className="btn" style={{ background: '#ffe600', color: 'black' }}>
          <LocalMallIcon />
        </Link>
      </div>
     
    </div>
  );
}

export default NavBar;
