import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setSelectedProductId } from '../../redux/actions'; // Importa la acción setSelectedProductId
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import styles from '../carousel/Carousel.module.css'; // Importa los estilos del archivo Carousel.module.css

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

    const handleViewDetails = (id) => {
        dispatch(setSelectedProductId(id)); // Dispatch de la acción setSelectedProductId con el ID del producto seleccionado
    };

    // Función para formatear la descripción y añadir saltos de línea antes de cada guion (-)
    const formatDescription = (description) => {
        return description.replace(/-/g, '<br>-');
    };

    return (
        <div className={`${styles.carouselContainerPadre} bg-gradient-to-b from-gray-100 to-gray-300 flex justify-center items-center h-screen`}>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Elige tu combo</h2>
                {loading ? (
                    <p>Cargando productos...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {combos.length > 0 ? (
                            // Si hay combos, mapea para renderizar cada producto con botón "Agregar al carrito"
                            combos.map(product => (
                                <div key={product.id} className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col">
                                    <img className="w-full h-56 object-cover" src={product.url} alt={product.title} />
                                    <div className="px-6 py-4 flex-grow">
                                        <div className="font-bold text-xl mb-2">{product.nombre}</div>
                                        <p className="text-gray-700 text-base mb-2" dangerouslySetInnerHTML={{ __html: formatDescription(product.descripcion) }} />
                                        <p className="text-gray-800 text-xl">${product.precio}</p>
                                    </div>
                                    <div className="px-6 py-4 flex justify-center items-center flex-col space-y-4">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            <AddShoppingCartIcon className="mr-2" />
                                            Agregar al carrito
                                        </button>
                                        <Link
                                            to={`/product-detail/${product.id}`}
                                            className="text-blue-500 hover:underline focus:outline-none"
                                            onClick={() => handleViewDetails(product.id)}
                                        >
                                            Ver detalle
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Si no hay combos, muestra un mensaje
                            <p className="text-center col-span-4">No hay combos disponibles.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carousel;
