// En tu componente ProductDetail.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function ProductDetail( ) {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.productos);
  const selectedProductId = useSelector(state => state.selectedProductId);
  const selectedProductQuantity = useSelector(state => state.selectedProductQuantity);

  const selectedProduct = products.find(product => product.id === parseInt(productId));

  const handleAddToCart = () => {

    const { id, nombre, category, precio, imagen, stock }  = selectedProduct ;
    dispatch(addToCart({ id, nombre, category, precio, imagen, stock } ));
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-success-content">
      {selectedProduct ? (
        <div className="flex flex-col lg:flex-row bg-base-100 shadow-xl rounded-lg overflow-hidden max-w-screen-lg mx-4">
          <div className="w-full h-56 overflow-hidden flex items-center justify-center border-primary">
            <img className="w-full h-full object-cover" src={selectedProduct.imagen} alt="Producto" />
          </div>
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-bold">${selectedProduct.precio}</h3>
              <h2 className="text-lg font-semibold">{selectedProduct.nombre}</h2>
              <p className="mt-2">{selectedProduct.description}</p>
              <p>Cantidad seleccionada: {selectedProductQuantity}</p>
            </div>
            <div className="card-actions flex justify-end">
              {/* Aquí puedes agregar cualquier acción adicional si es necesario */}
            </div>
          </div>
          <button
        className="btn"
        onClick={handleAddToCart}
        style={{ background: '#ffe600' , color: 'black',}} // Establecer el color usando el código hexadecimal
      >
        <AddShoppingCartIcon/>
        Agregar al carrito
      </button>
        </div>
      ) : (
        <p className="text-center">No se encontró ningún producto</p>
      )}
    </div>
  );
}

export default ProductDetail;