// Cards.js
import React, { useEffect } from 'react';
import { dataJson } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from '../cards/Cards.module.css';
import ComponenteDescuento from '../componenteDescuento/ComponenteDescuento';
import Filter from '../filter/Filter';
import Carousel from '../carousel/Carousel.jsx';

function Cards() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos);
    const filteredProducts = useSelector(state => state.filteredProductos);
    const searchTerm = useSelector(state => state.searchTerm);

    useEffect(() => {
        if (!filteredProducts || filteredProducts.length === 0) {
            dispatch(dataJson());
        }
    }, [dispatch, filteredProducts]);

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
          <Carousel/>
            <ComponenteDescuento/> 
            <div className={style.cardsContainer}>
                <div className={style.gridContainer}>
                    {filteredBySearch.map(product => (
                        <Card
                            key={product.id}
                            nombre={product.nombre}
                            category={product.category}
                            precio={product.precio}
                            imagen={product.imagen}
                            id={product.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;
