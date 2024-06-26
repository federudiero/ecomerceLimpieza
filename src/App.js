import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import Home from './views/Home';
import DetailProductoId from './views/DetailProductoId';
import Carrito from './Components/Carrito/Carrito'; // Ruta actualizada de importación
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from './redux/actions';
import Footer from './Components/Footer/Footer';
import NosotrosView from './views/NosotrosView';
import ContactoView from './views/ContactoView';
import FormularioFirebaseView from './views/FormularioFirebaseView';
import WhatsAppButton from '../src/Components/whatsapp/WhatsAppButton';
import Balanceado from './views/Balanceado';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartButton from './Components/ButtonCart/CartButton';


function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart); // Obtener el estado del carrito desde Redux
  const [cartLoaded, setCartLoaded] = useState(false);

  // Cargar el carrito desde localStorage al iniciar la aplicación
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    dispatch(updateCart(cartFromLocalStorage)); // Actualizar el estado global del carrito
    setCartLoaded(true);
  }, [dispatch]);

  // Guardar el carrito en localStorage cada vez que cambie
  useEffect(() => {
    if (cartLoaded) {
      localStorage.setItem('cart', JSON.stringify(cart)); // Guardar el estado global del carrito
    }
  }, [cart, cartLoaded]);

  return (
    <div className="App">
      <NavBar />
        <WhatsAppButton/>
        <CartButton/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:productId" element={<DetailProductoId />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/nosotros" element={<NosotrosView />} />
        <Route path="/contacto" element={<ContactoView />} />
        <Route path="/formulario" element={<FormularioFirebaseView />} />
        <Route path="/balanceado" element={<Balanceado />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
