import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../carousel/Carousel.module.css';
import { addToCart } from '../../redux/actions'; // Importa la acción addToCart
import perro from '../../img/perro22.png';
import { Link } from 'react-router-dom';

const Carousel2 = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de productos desde Redux (aquí puedes despachar una acción para cargar productos)
        setTimeout(() => {
            setLoading(false); // Indica que la carga ha finalizado
        }, 2000); // Simulamos una carga de 2 segundos
    }, []);

    // Filtrar productos por categoría 'Balanceado'
    const balanceadoProducts = products.filter(product => product.category === 'Balanceado');

    // Función para seleccionar n elementos aleatorios de un array
    const getRandomElements = (arr, n) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    // Obtener 4 productos aleatorios de la categoría 'Balanceado'
    const randomCombos = getRandomElements(balanceadoProducts, 2);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Dispatch de la acción addToCart con el producto seleccionado
        alert('Producto agregado al carrito');
    };

    return (
        <div className={style.carouselContainerPadre2}>

            <div className={style.divPerroTitulo2}>

                <img src={perro} alt="" />
                <h2 className={style.h2Carousel2}>Comuida para tu mascota</h2>
                <tr className={style.br}/>
                <Link to={'/balanceado'} className={style.buttonVerMas}>Ver mas</Link>
            </div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className={style.carouselContainer2}>
                    {randomCombos.length > 0 ? (
                        // Si hay productos, mapea para renderizar cada producto con botón "Agregar al carrito"
                        randomCombos.map(product => (
                            <div className={style.cardCarousel2} key={product.id}>
                                <img className={style.imgCarousel2} src={product.url} alt={product.title} />
                                <div className={style.contenth3h2buton2}>
                                    <h3 className={style.h3Carousel}>{product.nombre}</h3>
                                    <button
                                        className={style.btnAddToCart} // Estilo para el botón "Agregar al carrito"
                                        onClick={() => handleAddToCart(product)} // Manejador del evento click
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Si no hay productos, muestra un mensaje
                        <p>No hay productos disponibles.</p>
                    )}
             
                </div>
            )}
        </div>
    );
};

export default Carousel2;
