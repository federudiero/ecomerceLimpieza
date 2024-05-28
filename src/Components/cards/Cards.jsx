import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import Card from '../Card/Card';
import style from '../cards/Cards.module.css';
import Filter from '../filter/Filter';

function Cards() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productos);
  const filteredProducts = useSelector(state => state.filteredProductos);
  const searchTerm = useSelector(state => state.searchTerm);

  const [showFilter, setShowFilter] = useState(true);

  useEffect(() => {
    // Cargar los productos desde Firebase al montar el componente
    dispatch(loadProducts());

    // Agregar un listener al evento de scroll para controlar la visibilidad del filtro
    const handleScroll = () => {
      const offset = window.scrollY;
      const filterContainer = document.getElementById('filterContainer');

      if (filterContainer) {
        const filterHeight = filterContainer.offsetHeight;
        const show = offset > filterHeight; // Mostrar el filtro cuando el scroll pase la altura del filtro
        setShowFilter(show);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : products;

  // Filtrar productos según el término de búsqueda
  const filteredBySearch = productsToDisplay.filter(product =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={style.cardsContainerPadreMayor}>
      <div className={style.ContainerFilterCards}>
        {showFilter && <Filter />} {/* Mostrar el filtro solo si showFilter es true */}
      </div>

      {filteredBySearch.length === 0 ? ( 
        
        <div className={style.noProducts}>
          <p>Cargando Productos...</p>
        </div>
      ) : (
        <div className={style.cardsContainer}>
          {filteredBySearch.map(product => (
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
      )}
    </div>
  );
}

export default Cards;
