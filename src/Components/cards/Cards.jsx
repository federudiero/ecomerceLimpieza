// Cards.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import Card from '../Card/Card';
import style from '../cards/Cards.module.css';

function Cards() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productos);
  const filteredProducts = useSelector(state => state.filteredProductos);
  const searchTerm = useSelector(state => state.searchTerm);

  useEffect(() => {
    // Cargar los productos desde Firebase al montar el componente
    dispatch(loadProducts());
  }, [dispatch]);

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : products;

  // Filtrar productos según el término de búsqueda
  const filteredBySearch = productsToDisplay.filter(product =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!filteredBySearch || filteredBySearch.length === 0) {
    return <div>No hay productos disponibles</div>;
  }

  return (
    <div className={style.cardsContainerPadreMayor}>
      <div className={style.cardsContainer}>
        <div className={style.gridContainer}>
          {filteredBySearch.map(product => (
            
           console.log(product),
            <Card
              key={product.id}
              nombre={product.nombre}
              category={product.category}
              precio={product.precio}
             
              url={product.url}
              id={product.id}
            />
           
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
