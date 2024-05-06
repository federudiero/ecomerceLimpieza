import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Carousel.module.css';
import { addToCart } from '../../redux/actions'; // Importa la acción addToCart

const Carousel = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Simula una carga de productos desde Redux (aquí puedes despachar una acción para cargar productos)
        setTimeout(() => {
            setLoading(false); // Indica que la carga ha finalizado
        }, 2000); // Simulamos una carga de 2 segundos
    }, []);

    // Filtrar productos por categoría 'Combos'
    const combos = products.filter(product => product.category === 'Combos');

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch de la acción addToCart con el producto seleccionado
        alert('Producto agregado al carrito');
    };

    return (
        <div className={style.carouselContainerPadre}>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className={style.carouselContainer}>
                    {combos.length > 0 ? (
                        // Si hay combos, mapea para renderizar cada producto con botón "Agregar al carrito"
                        combos.map(product => (
                            <div className={style.cardCarousel} key={product.id}>
                                <img className={style.imgCarousel} src={product.url} alt={product.title} />
                                <div>
                                    <h3 className={style.h3Carousel}>{product.nombre}</h3>
                                    <p className={style.pCarousel}>{product.descripcion}</p>
                                </div>
                                    <button
                                        className={style.btnAddToCart} // Estilo para el botón "Agregar al carrito"
                                        onClick={() => handleAddToCart(product)} // Manejador del evento click
                                    >
                                        Agregar al carrito
                                    </button>
                            </div>
                        ))
                    ) : (
                        // Si no hay combos, muestra un mensaje
                        <p>No hay combos disponibles.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Carousel;











