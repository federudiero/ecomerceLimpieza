import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, updateCartCount } from '../../redux/actions';
import style from './Carrito.module.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import Count from '../Count/Count';

function Carrito() {
  const cart = useSelector(state => state.cart);
  const cartCounts = useSelector(state => state.cartCounts); // Cambiado a cartCounts directamente
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeCart(itemId));
  };

  const handleCountChange = (itemId, count) => {
    dispatch(updateCartCount(itemId, count));
  };
  
  // Calcular el total general de todos los productos en el carrito
  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.precio * (cartCounts[item.id] || 1);
    });
    return total;
  };

  // Construir el mensaje de WhatsApp con los detalles del pedido
  const buildWhatsAppMessage = () => {
    let message = "¡Hola! Quiero realizar un pedido:\n";
    cart.forEach(item => {
      message += `${item.nombre}: ${cartCounts[item.id] || 1} x $${item.precio}\n`;
    });
    message += `Total de la compra: $${calculateTotal().toFixed(2)}`;
    return encodeURIComponent(message); // Codificar para asegurar caracteres válidos en una URL
  };

  const handleConfirmOrder = () => {
    const message = buildWhatsAppMessage();
    const whatsappLink = `https://wa.me/3518120950?text=${message}`; //
    window.open(whatsappLink, '_blank'); // Abre el enlace en una nueva ventana/tab
  };

  useEffect(() => {
    // Guardar en el almacenamiento local cuando cambian los recuentos de los productos en el carrito
    localStorage.setItem('cartCounts', JSON.stringify(cartCounts));
  }, [cartCounts]);

  return (
    <div className={style.containerCart}>
     
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div className={style.carritoCardContainer}>
          {cart.map(item => (
            <div className={style.card} key={item.id}>
              <img className={style.imageCart} src={item.imagen} alt={item.nombre} />
              <div className={style.textoCart}>
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio}</p>
                <Count initialValue={cartCounts[item.id] || 1} onCountChange={(count) => handleCountChange(item.id, count)} />
                <p>Total: ${parseFloat((item.precio * (cartCounts[item.id] || 1)).toFixed(2))}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}><DeleteOutlineIcon /></button>
              </div>
            </div>
          ))}
        </div>
      )}
     <div className={style.divContainerTotalLinks}>
        <p className={style.parrafoTotal}>Total: ${parseFloat(calculateTotal().toFixed(2))}</p>
        <div className={style.divLink}>
          <Link
            to={`/`}
            className="btn"
            style={{ background: '#ffe600', color: 'black' }}
          >
            Agregar más productos
          </Link>
          <button className="btn" onClick={handleConfirmOrder} style={{ background: '#25D366', color: 'black' }}>
            Confirmar compra
          </button>
        </div>
     </div>
    </div>
  );
}

export default Carrito;
