import React from 'react'
import Filter from '../filter/Filter'
import style from '../navBar/NavBar.module.css'
import { Link ,useLocation } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HomeIcon from '@mui/icons-material/Home';


function NavBar() {
  const location = useLocation();
  return (
    <div className={style.containerNavBar}>
      <div className="navbar bg-base-100 flex gap-4">
    <div className="flex-1">
    <Link
          to={`/`}
          className="btn"
          style={{ background: '#ffe600', color: 'black' }}
        >
          <HomeIcon/>
        </Link>
        <Link
          to={`/nosotros`}
          
          className="btn btn-ghost text-xl"
        >
         Nosotros
        </Link>
        <Link
          to={`/contacto`}
          
          className="btn btn-ghost text-xl"
        >
         Contacto
        </Link>
     
    </div>

    {location.pathname === '/' && (
          <div>
            <Filter />
          </div>
        )}

    <div className="flex-none gap-2">
      
      <Link
          to={`/carrito`}
          className="btn"
          style={{ background: '#ffe600', color: 'black' }}
        >
          <LocalMallIcon/>
        </Link>
      
    </div>
  </div></div>
  )
}

export default NavBar