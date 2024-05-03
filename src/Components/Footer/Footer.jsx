import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer className={style.footerContainer}>
  <nav className={style.navContainer}>
  <Link
          to={`/nosotros`}
          
          className={style.btn}
        >
         Nosotros
        </Link>
        <Link
          to={`/contacto`}
          
          className={style.btn}
        >
         Contacto
        </Link>
   
  </nav> 
  <nav className={style.navContainer}>
  
    <a className={style.a} href="URL_WHATSAPP" target="_blank">
      <WhatsAppIcon/>
    </a>
    <a className={style.a} href="URL_INSTAGRAM" target="_blank">
      <InstagramIcon/>
    </a>
  </nav> 
  <aside className={style.asideContainer}>
    <p className={style.p}>Copyright © 2024 - All right reserved by Developer- <CodeIcon/> / Federico Rudiero / <CodeIcon/> </p>
  </aside>
</footer>
  )
}

export default Footer  