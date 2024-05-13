// ProductDetail.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import style from './ProductoDetail.module.css';

function ProductDetail({ productId }) {
  const iconStyle = {
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    color: '#f7df1e' 
  };



  const dispatch = useDispatch();
  const products = useSelector(state => state.productos);
  const selectedProduct = products.find(product => product.id === productId);

  // Manejar la acción de agregar al carrito
  const handleAddToCart = () => {
    if (selectedProduct) {
      const { id, nombre, category, precio, url, stock, descripcion } = selectedProduct;
      dispatch(addToCart({ id, nombre, category, precio, url, stock, descripcion }));
    }
  };

  // Guardar el producto seleccionado en localStorage al montar el componente
  useEffect(() => {
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    return () => {
      // Limpiar el producto almacenado al desmontar el componente (cuando se sale del detalle del producto)
      localStorage.removeItem('selectedProduct');
    };
  }, [selectedProduct]); // Ejecutar el efecto cada vez que selectedProduct cambie

  if (!selectedProduct) {
    return <p className="text-center">No se encontró ningún producto con el ID {productId}</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-success-content">
      <a href="/" >
          <ArrowCircleLeftIcon style={iconStyle} />
        </a>
      <div className="flex flex-col lg:flex-row bg-base-200 shadow-xl rounded-lg overflow-hidden max-w-screen-lg mx-4">
         
        <div className="w-full h-56 overflow-hidden flex items-center justify-center border-primary">
          <img className="w-full h-full object-cover" src={selectedProduct.url} alt="Producto" />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-xl font-bold">${selectedProduct.precio}</h3>
            <h2 className="text-lg font-semibold">{selectedProduct.nombre}</h2>
            <p className="mt-2">{selectedProduct.descripcion}</p>
            <p className="text-sm">Categoría: {selectedProduct.category}</p>
            <p className="text-sm">Stock: {selectedProduct.stock}</p>
          </div>
          <div className="card-actions flex justify-end">
            <button
              className="btn"
              onClick={handleAddToCart}
              style={{ background: '#ffe600', color: 'black' }}
            >
              <AddShoppingCartIcon />
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
