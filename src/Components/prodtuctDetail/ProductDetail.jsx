import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import styles from '../prodtuctDetail/ProductoDetail.module.css'; // Importar estilos CSS Modules

function ProductDetail({ productId }) {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productos);
  const selectedProduct = products.find(product => product.id === productId);

  const handleAddToCart = () => {
    if (selectedProduct) {
      const { id, nombre, category, precio, url, descripcion } = selectedProduct;
      dispatch(addToCart({ id, nombre, category, precio, url, descripcion }));
    }
  };

  useEffect(() => {
    localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));

    return () => {
      localStorage.removeItem('selectedProduct');
    };
  }, [selectedProduct]);

  if (!selectedProduct) {
    return <p className={styles.error}>No se encontró ningún producto con el ID {productId}</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={selectedProduct.url} alt="Producto" />
      </div>
      <a href="/" className={styles.backButton}>
        <ArrowCircleLeftIcon className={styles.arrowIcon} />
      </a>
      <div className={styles.productInfo}>
        <div>
          <h2 className={styles.title}>{selectedProduct.nombre}</h2>
          <p className={styles.description}>{selectedProduct.descripcion}</p>
          <div className={styles.priceContainer}>
            <span className={styles.price}>${selectedProduct.precio}</span>
            <span className={styles.category}>Categoría: {selectedProduct.category}</span>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className={styles.addToCartButton}
            onClick={handleAddToCart}
          >
            <AddShoppingCartIcon className="mr-2" />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
