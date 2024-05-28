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

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-300 py-8" style={{ backgroundColor: 'rgb(58, 101, 149)' }}>
            <div className="container mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Ofertas en Combos de Limpieza</h2>
                {loading ? (
                    <p className="text-center text-gray-700">Cargando productos...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                        {combos.length > 0 ? (
                            combos.map(product => (
                                <div key={product.id} className="w-full max-w-xs rounded overflow-hidden shadow-md bg-white flex flex-col h-full transform transition-transform hover:scale-105">
                                    <img className="w-full h-64 object-cover" src={product.url} alt={product.title} />
                                    <div className="px-6 py-4 flex-grow">
                                        <div className="font-bold text-xl mb-2 text-gray-800">{product.nombre}</div>
                                        <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={{ __html: formatDescription(product.descripcion) }} />
                                        <p className="text-gray-800 text-lg font-semibold">${product.precio}</p>
                                    </div>
                                    <div className="px-6 py-4 flex justify-center items-center flex-col space-y-4">
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
                            ))
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
