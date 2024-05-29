import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setSelectedProductId } from '../../redux/actions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const combos = products.filter(product => product.category === 'Combos');

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleViewDetails = (id) => {
        dispatch(setSelectedProductId(id));
    };

    const formatDescription = (description) => {
        return description.replace(/-/g, '<br>-');
    };

    // Función para separar número y nombre del combo
    const separarNumeroYNombre = (nombreCombo) => {
        // Buscamos el índice del primer dígito
        const index = nombreCombo.search(/\d/);
        // Extraemos el nombre del combo
        const nombre = nombreCombo.slice(0, index).trim();
        // Extraemos el número del combo
        const numero = nombreCombo.slice(index).trim();
        return `${nombre} ${numero}`; // Devolvemos una cadena con ambos elementos concatenados
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-300 py-8" style={{ backgroundColor: 'rgb(58, 101, 149)', padding: '20px' }}>
            <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg" style={{ padding: '20px' }}>
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Ofertas en Combos de Limpieza</h2>
                {loading ? (
                    <p className="text-center text-gray-700">Cargando productos...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {combos.length > 0 ? (
                            combos.map(product => {
                                // Separar número y nombre del combo
                                const { numero, nombre } = separarNumeroYNombre(product.nombre);
                                return (
                                    <div key={product.id} className="w-full sm:w-80 rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between transform transition-transform hover:scale-105">
                                        <div className="flex-grow">
                                            <img className="w-full h-48 object-cover" src={product.url} alt={product.title} />
                                            <div className="px-4 py-2">
                                           <h3 className="text-gray-700 text-lg mb-4">{separarNumeroYNombre(product.nombre)}</h3>
                                                <p className="text-gray-700 text-sm mb-4" dangerouslySetInnerHTML={{ __html: formatDescription(product.descripcion) }} />
                                                <p className="text-gray-800 text-lg">${product.precio}</p>
                                            </div>
                                        </div>
                                        <div className="px-4 py-2 flex justify-center items-center flex-col space-y-2">
                                            <button
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none shadow-sm"
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
                                );
                            })
                        ) : (
                            <p className="text-center col-span-4 text-gray-700">No hay combos disponibles.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Carousel;
