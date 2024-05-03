import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '@mui/material';
import FormatOverlineIcon from '@mui/icons-material/FormatOverline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CodeIcon from '@mui/icons-material/Code';
import style from './Footer.module.css';

function Footer() {
  const [password, setPassword] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAccessForm = () => {
    const correctPassword = '081295'; // Reemplaza con tu contraseña correcta
    if (password === correctPassword) {
      // Redirige al usuario a la página del formulario si la contraseña es correcta
      window.location.href = '/formulario';
    } else {
      alert('Contraseña incorrecta. Inténtalo de nuevo.');
    }
    // Cierra el modal después de verificar la contraseña
    setModalOpen(false);
    // Limpia el campo de contraseña
    setPassword('');
  };

  return (
    <footer className={style.footerContainer}>
      <nav className={style.navContainer}>
        <Link to={`/nosotros`} className={style.btn}>
          Nosotros
        </Link>
        <Link to={`/contacto`} className={style.btn}>
          Contacto
        </Link>
      </nav>

      <nav className={style.navContainer}>
        <a className={style.a} href="URL_WHATSAPP" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
        </a>
        <a className={style.a} href="URL_INSTAGRAM" target="_blank" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </nav>

      <aside className={style.asideContainer}>
        <p className={style.p}>
          Copyright © 2024 - All right reserved by Developer- <CodeIcon /> / Federico Rudiero / <CodeIcon />  
        </p>
          <Link
          to="#"
          onClick={handleModalOpen}
          className="btn"
          style={{ background: '#393939', color: 'black' ,height:"20px",width:"20px" }}
        >
          <FormatOverlineIcon />
        </Link>
      
        <Modal open={modalOpen} onClose={handleModalClose}>
          <div style={{ padding: 20, backgroundColor: 'grey' }}>
            <h2 style={{ color:"black" }}>Ingresa la contraseña para acceder al formulario:</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              style={{ margin: '10px 0', padding: '5px' }}
            />
            <button style={{ marginLeft: '10px' ,color:"black" }} onClick={handleAccessForm}>Acceder</button>
          </div>
        </Modal>
      </aside>
    </footer>
  );
}

export default Footer;
