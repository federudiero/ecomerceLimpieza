import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions';
import perro from '../../img/perro22.png';
import { Link } from 'react-router-dom';

const Carousel2 = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const balanceadoProducts = products.filter(product => product.category === 'Balanceado');

    const getRandomElements = (arr, n) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
    };

    const randomCombos = getRandomElements(balanceadoProducts, 4);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-lg">
            <div className="flex flex-col items-center mb-8">
                <img src={perro} alt="" className="w-48 h-48 mb-4 rounded-full" />
                <Link to={'/balanceado'} className="text-blue-500 hover:underline bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none mb-4">Ver más</Link>
            </div>
            {loading ? (
                <p className="text-black font-bold text-2xl">Cargando productos...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {randomCombos.length > 0 ? (
                        randomCombos.map(product => (
                            <div key={product.id} className="w-64 bg-white rounded-lg shadow-md overflow-hidden h-96"> {/* Ajuste de altura total */}
                                <img className="w-full h-48 object-cover rounded-t-lg" src={product.url} alt={product.title} />
                                <div className="p-4 flex flex-col justify-between h-48"> {/* Ajuste de altura interna */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{product.nombre}</h3>
                                        <p className="text-gray-800 text-lg mb-4">${product.precio}</p>
                                    </div>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none inline-block mt-auto"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-4">No hay productos disponibles.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Carousel2;
