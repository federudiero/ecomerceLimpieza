import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/actions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function ProductDetail() {
  const { productId } = useParams(); // Obtener el productId de los parámetros de la URL
  const dispatch = useDispatch();
  const products = useSelector(state => state.productos); // Obtener la lista de productos del estado Redux
console.log(products);
  // Buscar el producto seleccionado por su ID
  const selectedProduct = products.find(product => product.id == productId);

  // Manejar la acción de agregar al carrito
  const handleAddToCart = () => {
    if (selectedProduct) {
      const { id, nombre, category, precio, url, stock } = selectedProduct;
      dispatch(addToCart({ id, nombre, category, precio, url, stock }));
    }
  };

  // Renderizar el detalle del producto
  return (
    <div className="flex justify-center items-center min-h-screen bg-success-content">
      {selectedProduct ? (
        <div className="flex flex-col lg:flex-row bg-base-200 shadow-xl rounded-lg overflow-hidden max-w-screen-lg mx-4">
          <div className="w-full h-56 overflow-hidden flex items-center justify-center border-primary">
            <img className="w-full h-full object-cover" src={selectedProduct.url} alt="Producto" />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-bold">${selectedProduct.precio}</h3>
              <h2 className="text-lg font-semibold">{selectedProduct.nombre}</h2>
              <p className="mt-2">{selectedProduct.description}</p>
              <p>Cantidad seleccionada: 1</p> {/* Puedes ajustar la cantidad seleccionada según tus necesidades */}
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
      ) : (
        <p className="text-center">No se encontró ningún producto con el ID {productId}</p>
      )}
    </div>
  );
}

export default ProductDetail;
