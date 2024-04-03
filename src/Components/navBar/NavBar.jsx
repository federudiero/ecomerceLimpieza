import React from 'react'
import Filter from '../filter/Filter'
import style from '../navBar/NavBar.module.css'
import { Link } from 'react-router-dom'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import HomeIcon from '@mui/icons-material/Home';


function NavBar() {
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
      <a className="btn btn-ghost text-xl">Contacto</a>
      <a className="btn btn-ghost text-xl">Nosotros</a>
    </div>

    <div>

        <Filter/>
    </div>

    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
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