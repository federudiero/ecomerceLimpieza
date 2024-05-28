import React, { useState } from 'react';
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
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-300 min-h-screen">
            <div className="md:w-1/2 p-8 bg-black max-w-md mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-white">Contactanos</h2>
                <label htmlFor="nombre" className="mb-2 text-white">Nombre:</label>
                <input className="w-full bg-white px-4 py-2 mb-4 border border-gray-300 rounded-md" type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="mensaje" className="mb-2 text-white">Mensaje:</label>
                <textarea className="w-full bg-white text-black px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none" id="mensaje" value={mensajeUsuario} onChange={(e) => setMensajeUsuario(e.target.value)}></textarea>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-500" onClick={enviarMensaje}>Enviar <WhatsAppIcon className="inline-block" /></button>
            </div>
         
            <div className="md:w-1/2 max-w-md mx-auto p-8">
                <iframe
                    title="Mapa de Córdoba Capital"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.196518228609!2d-64.18865278479608!3d-31.420083426879287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942e1c6b6732a3d9%3A0x54eb5f2d7c2f!2sC%C3%B3rdoba%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1631557690700!5m2!1ses-419!2sar"
                    className="w-full h-96 border-0 rounded-md"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
         
        </div>
    );
};

export default Contacto;
