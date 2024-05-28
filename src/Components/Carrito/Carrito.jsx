import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart, updateCartCount } from '../../redux/actions';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import Count from '../Count/Count';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function Carrito() {
  const cart = useSelector(state => state.cart);
  const cartCounts = useSelector(state => state.cartCounts);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeCart(itemId));
  };

  const handleCountChange = (itemId, count) => {
    dispatch(updateCartCount(itemId, count));
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.precio * (cartCounts[item.id] || 1);
    });
    return total;
  };

  const buildWhatsAppMessage = () => {
    let message = "¡Hola! Quiero realizar un pedido:\n";
    cart.forEach(item => {
      message += `${item.nombre}: ${cartCounts[item.id] || 1} x $${item.precio}\n`;
    });
    message += `Total de la compra: $${calculateTotal().toFixed(2)}`;
    return encodeURIComponent(message);
  };

  const handleConfirmOrder = () => {
    const message = buildWhatsAppMessage();
    const whatsappLink = `https://wa.me/3518120950?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  useEffect(() => {
    localStorage.setItem('cartCounts', JSON.stringify(cartCounts));
  }, [cartCounts]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-300 to-white p-4">
      <a href="/" className="absolute left-4 top-4">
        <ArrowCircleLeftIcon className="w-12 h-12 cursor-pointer text-yellow-500 hover:text-yellow-700" />
      </a>
      {cart.length === 0 ? (
        <p className="text-3xl font-bold text-gray-700">No hay productos en el carrito</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 p-5">
          {cart.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center" style={{ width: '250px', height: '450px' }}>
              <img className="w-32 h-32 object-cover rounded-full" src={item.url} alt={item.nombre} />
              <div className="mt-4 w-full flex-grow flex flex-col justify-between">
  <div style={{ minHeight: '150px' }} className="flex flex-col justify-between">
    <h3 className="text-xl font-semibold text-gray-800 ">{item.nombre}</h3>
    <p className="text-gray-600 ">Precio por unidad: ${item.precio}</p>
    <Count  initialValue={cartCounts[item.id] || 1} onCountChange={(count) => handleCountChange(item.id, count)} />
    <p className="text-gray-600 ">Total: ${parseFloat((item.precio * (cartCounts[item.id] || 1)).toFixed(2))}</p>
  </div>
  <button onClick={() => handleRemoveFromCart(item.id)} className="mt-4 mb-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center justify-center w-full">
    <DeleteOutlineIcon className="mr-2" />
    Eliminar
  </button>
</div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 text-xl font-bold text-gray-800">
        Total: ${parseFloat(calculateTotal().toFixed(2))}
      </div>
      <div className="mt-8 flex gap-4">
        <Link to={`/`} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md text-xl font-semibold">
          Agregar más productos
        </Link>
        <button onClick={handleConfirmOrder} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-xl font-semibold">
          Confirmar compra
        </button>
      </div>
    </div>
  );
}

export default Carrito;
