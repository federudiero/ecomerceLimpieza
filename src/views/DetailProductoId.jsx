import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../Components/prodtuctDetail/ProductDetail';

function DetailProductoId() {
  const { productId } = useParams(); // Obtener productId de los parámetros de la URL

  return (
    <div>
      <ProductDetail productId={productId} /> {/* Pasar productId como prop a ProductDetail */}
    </div>
  );
}

export default DetailProductoId;