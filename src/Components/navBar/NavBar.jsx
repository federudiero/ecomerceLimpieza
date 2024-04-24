import React, { useState, useEffect } from 'react';
// Importa React y los hooks useState y useEffect desde la biblioteca React.

import { Link, useLocation } from 'react-router-dom';
// Importa los componentes Link y useLocation desde react-router-dom, que se utilizan para manejar las rutas y la ubicación actual del navegador.

import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
// Importa los íconos de Material-UI que se utilizarán en el NavBar.

import Filter from '../filter/Filter';
// Importa el componente Filter desde un archivo local.

import style from './NavBar.module.css';
// Importa los estilos CSS específicos del NavBar desde un archivo local.

function NavBar() {
  // Define el componente NavBar como una función.

  const location = useLocation();
  // Declara una variable location que almacena la ubicación actual del navegador utilizando el hook useLocation().

  const [showMenu, setShowMenu] = useState(false);
  // Declara un estado showMenu que determina si el menú está visible o no. Inicialmente se establece en false utilizando el hook useState.

  const isHomePage = location.pathname === '/';
  // Declara una variable isHomePage que verifica si la ubicación actual es la página de inicio (ruta '/').

  useEffect(() => {
    // Utiliza el hook useEffect para ejecutar una función cada vez que cambie la ubicación.
    setShowMenu(false); // En este caso, la función establece showMenu en false, ocultando el menú desplegable.
  }, [location]);

  const toggleMenu = () => {
    // Declara una función toggleMenu que cambia el estado showMenu entre true y false, alternando la visibilidad del menú.
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    // Declara una función handleLinkClick que oculta el menú desplegable al hacer clic en un enlace del menú.
    setShowMenu(false);
  };

  return (
    <div className={style.containerNavBar}>
      {/* Renderiza el contenedor del NavBar con los estilos definidos en el archivo CSS. */}
      <div className="flex-none">
        {/* Renderiza un contenedor flexible que no se expande automáticamente. */}
        <button onClick={toggleMenu} className="btn btn-square btn-ghost md:hidden">
          {/* Renderiza un botón que muestra el ícono del menú. */}
          <MenuIcon />
          {/* Renderiza el ícono del menú utilizando el componente MenuIcon importado de Material-UI. */}
        </button>
      </div>
      <div className={`${style.menu} ${showMenu ? 'block' : 'hidden md:block'}`}>
        {/* Renderiza el menú con los estilos definidos en el archivo CSS, mostrándolo si showMenu es true. */}
        <Link
          to="/"
          className="btn"
          style={{ background: '#ffe600', color: 'black' }}
        >
          {/* Renderiza un enlace a la página de inicio con estilos personalizados. */}
          <HomeIcon />
          {/* Renderiza el ícono de inicio utilizando el componente HomeIcon importado de Material-UI. */}
        </Link>
        {showMenu ? (
          // Si showMenu es true, muestra los siguientes elementos en el menú desplegable.
          <>
            <Link to="/nosotros" className="btn btn-ghost text-xl" onClick={handleLinkClick}>
              {/* Renderiza un enlace a la página "Nosotros" con estilos personalizados. */}
              Nosotros
            </Link>
            <Link to="/contacto" className="btn btn-ghost text-xl" onClick={handleLinkClick}>
              {/* Renderiza un enlace a la página "Contacto" con estilos personalizados. */}
              Contacto
            </Link>
            <div className="md:hidden">
              {/* Renderiza el componente Filter solo en dispositivos móviles. */}
              {isHomePage && <Filter onClick={handleLinkClick} />}
              {/* Renderiza el filtro solo en la página de inicio. */}
            </div>
          </>
        ) : (
          // Si showMenu es false, muestra los siguientes elementos en el menú principal.
          <>
            <div className="md:flex md:items-center md:space-evenly">
              {/* Renderiza un contenedor flexible con elementos centrados y espacio equitativo. */}
              <Link to="/nosotros" className="btn btn-ghost text-xl">
                {/* Renderiza un enlace a la página "Nosotros" con estilos personalizados. */}
                Nosotros
              </Link>
              <Link to="/contacto" className="btn btn-ghost text-xl">
                {/* Renderiza un enlace a la página "Contacto" con estilos personalizados. */}
                Contacto
              </Link>
            </div>
            {isHomePage && (
              // Si la ubicación actual es la página de inicio, renderiza los siguientes elementos.
              <div className="flex-none md:block hidden">
                {/* Renderiza un contenedor que no se expande automáticamente en dispositivos móviles. */}
                <Filter />
                {/* Renderiza el componente Filter. */}
                
              </div>
            )}
          </>
        )}
        <div className="flex-none md:block hidden">
          {/* Renderiza un contenedor que no se expande automáticamente en dispositivos móviles. */}
          <Link to="/carrito" className="btn" style={{ background: '#ffe600', color: 'black' }}>
            {/* Renderiza un enlace al carrito con estilos personalizados. */}
            <LocalMallIcon />
            {/* Renderiza el ícono del carrito utilizando el componente LocalMallIcon importado de Material-UI. */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
