import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import Filter from '../filter/Filter';
import style from './NavBar.module.css';

function NavBar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Cerrar el menú cuando cambie la ubicación
    setShowMenu(false);
  }, [location]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false); // Oculta el menú desplegable al hacer clic en un enlace del menú
  };

  return (
    <div className={style.containerNavBar}>
      <div className="flex-none">
        <button onClick={toggleMenu} className="btn btn-square btn-ghost md:hidden">
          <MenuIcon />
        </button>
      </div>
      <div className={`md:flex md:items-center md:justify-between w-full ${showMenu ? 'block' : 'hidden md:block'}`}>
        <Link
          to="/"
          className="btn"
          style={{ background: '#ffe600', color: 'black' }}
        >
          <HomeIcon />
        </Link>
        {showMenu ? (
          <>
            <Link to="/nosotros" className="btn btn-ghost text-xl" onClick={handleLinkClick}>
              Nosotros
            </Link>
            <Link to="/contacto" className="btn btn-ghost text-xl" onClick={handleLinkClick}>
              Contacto
            </Link>
            <div className="md:hidden">
              {isHomePage && <Filter onClick={handleLinkClick} />} {/* Renderiza el filtro solo en la página de inicio */}
            </div>
          </>
        ) : (
          <>
            <div className="md:flex md:items-center md:justify-between">
              <Link to="/nosotros" className="btn btn-ghost text-xl">
                Nosotros
              </Link>
              <Link to="/contacto" className="btn btn-ghost text-xl">
                Contacto
              </Link>
            </div>
            {isHomePage && ( // Renderiza el filtro solo en la página de inicio
              <div className="flex-none md:block hidden">
                <Filter />
              </div>
            )}
          </>
        )}
        <div className="flex-none md:block hidden">
          <Link to="/carrito" className="btn" style={{ background: '#ffe600', color: 'black' }}>
            <LocalMallIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
