import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { hideAlert } from '../../redux/actions'; 
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search'; // Importa el ícono de búsqueda

function NavBar() {
  const alertMessage = useSelector(state => state.alertMessage);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAlertClose = () => {
    dispatch(hideAlert());
  };

  const phoneNumber = '3515059215';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const instagramUrl = 'https://www.instagram.com/limpio_contento/?hl=es-la` ';
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const handleClickInstagram = () => {
    window.open(instagramUrl, '_blank');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para manejar el clic en la lupa
  const handleSearchClick = () => {
    const filterContainer = document.getElementById('filterContainer');
    if (filterContainer) {
      filterContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 w-full bg-gray-800 text-white py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        
        <Link to="/" className="text-2xl font-bold flex items-center">
          <HomeIcon className="mr-2" />
        </Link>
        <div className="hidden md:flex space-x-4">
        <button onClick={handleSearchClick} className="hover:text-gray-400">
            <SearchIcon />
          </button>
          <a onClick={handleClick} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <WhatsAppIcon />
          </a>
          <a onClick={handleClickInstagram} href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
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
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 mt-4">
          
          <a onClick={handleClick} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <WhatsAppIcon />
          </a>
          <a onClick={handleClickInstagram} href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
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
      )}
    </div>
  );
}

export default NavBar;
