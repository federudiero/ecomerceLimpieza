import React, { useEffect } from 'react';
import { dataJson } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from '../cards/Cards.module.css';

function Cards() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos); // Usar productos directamente
    const filteredProducts = useSelector(state => state.filteredProductos);

    useEffect(() => {
        if (!filteredProducts || filteredProducts.length === 0) {
            dispatch(dataJson());
        }
    }, [dispatch, filteredProducts]);

    const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : products; // Usar filteredProducts si está disponible, de lo contrario, utilizar productos

    if (!productsToDisplay || productsToDisplay.length === 0) {
        return <div>No hay productos disponibles</div>;
    }

    return (
        <div className={style.cardsContainerPadreMayor}>
            <div className={style.cardsContainer}>
                <div className={style.gridContainer}>
                    {productsToDisplay.map(product => (
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
