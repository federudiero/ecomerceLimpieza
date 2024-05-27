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
        alert('Producto agregado al carrito');
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <img src={perro} alt="" className="w-48 h-48 mb-4" /> {/* Aumentamos el tamaño de la imagen */}
                <h2 className="text-4xl font-bold mb-4 text-black">Comida para tu mascota</h2> {/* Aumentamos el tamaño y cambiamos el color del texto */}
                <Link to={'/balanceado'} className="text-blue-500 hover:underline mb-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none">Ver más</Link> {/* Aplicamos estilos al enlace */}
            </div>
            {loading ? (
                <p>Cargando productos...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {randomCombos.length > 0 ? (
                        randomCombos.map(product => (
                            <div key={product.id} className="max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                                <img className="w-full h-56 object-cover" src={product.url} alt={product.title} />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{product.nombre}</h3>
                                    <p className="text-gray-700 mb-4">Descripción del producto...</p>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none inline-block"
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
