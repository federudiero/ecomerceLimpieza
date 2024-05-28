import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { hideAlert } from '../../redux/actions'; 
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

function NavBar() {
  const alertMessage = useSelector(state => state.alertMessage);
  const dispatch = useDispatch();

  const handleAlertClose = () => {
    dispatch(hideAlert());
  };

  const phoneNumber = '3515059215';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const url = 'https://www.instagram.com/limpio_contento/?hl=es-la';
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const handleClickInstagram = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="fixed top-0 w-full bg-gray-800 text-white py-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <HomeIcon className="mr-2" />
          Limpio Contento
        </Link>
        <div className="flex space-x-4">
          <a onClick={handleClick} href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
          </a>
          <a onClick={handleClickInstagram} href={url} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <Link to="/nosotros" className="text-lg hover:text-gray-400">
            Nosotros
          </Link>
          <Link to="/contacto" className="text-lg hover:text-gray-400">
            Contacto
          </Link>
          <Link
            to="/carrito"
            className="relative text-lg hover:text-gray-400"
            onClick={handleAlertClose}
          >
            <ShoppingCartIcon className="mr-2" />
            {alertMessage && (
              <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full">
                <HighlightOffIcon className="w-4 h-4" onClick={handleAlertClose} />
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
