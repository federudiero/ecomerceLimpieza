import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
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
   
  </nav> 
  <nav>
  <div className="grid grid-flow-col gap-4">
  <a href="URL_WHATSAPP" target="_blank">
    <WhatsAppIcon/>
  </a>
  <a href="URL_INSTAGRAM" target="_blank">
    <InstagramIcon/>
  </a>
</div>


  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Developer- <CodeIcon/> / Federico Rudiero / <CodeIcon/> </p>
  </aside>
</footer>
  )
}

export default Footer  