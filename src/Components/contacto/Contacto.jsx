import React, { useState } from 'react';
import style from '../contacto/Contacto.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [mensajeUsuario, setMensajeUsuario] = useState('');

    const enviarMensaje = () => {
        const telefono = '3518120950';
        const mensaje = `Hola, soy ${nombre}. ${mensajeUsuario}`;
        window.open(`https://api.whatsapp.com/send?phone=${telefono}&text=${encodeURIComponent(mensaje)}`, '_blank');
    };

    return (
        <div className={style.containerContacto}>
           
            <div className={style.formContacto}>
                    <h2 className={style.h2Contacto}> Contactanos</h2>
                <label htmlFor="nombre">Nombre:</label>
                <input className={style.inputContacto} type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea className={style.textArea} id="mensaje" value={mensajeUsuario} onChange={(e) => setMensajeUsuario(e.target.value)}></textarea>
            <button className={style.btnContacto} onClick={enviarMensaje}>Enviar <WhatsAppIcon/></button>
            </div>
            <div>
                <iframe
                className={style.iframe}
                    title="Mapa de Córdoba Capital"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.196518228609!2d-64.18865278479608!3d-31.420083426879287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942e1c6b6732a3d9%3A0x54eb5f2d7c2f!2sC%C3%B3rdoba%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1631557690700!5m2!1ses-419!2sar"
                   
                    allowFullScreen=""
                    loading="lazy"
                    ></iframe>
            </div>
        </div>
    );
};

export default Contacto;