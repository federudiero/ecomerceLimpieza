import React, { useEffect } from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = '3515059215';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Tooltip title="Contactar por WhatsApp" aria-label="whatsapp">
      <Fab
        color="success"
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          height:'70px',
          width:'70px',
        }}
      >
        <WhatsAppIcon  style={{
         height:'40px',
         width:'40px',
        }} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsAppButton;
