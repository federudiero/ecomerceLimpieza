import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProductId, addToCart } from '../../redux/actions';
import perro from '../../img/perro22.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ComponentBalanceado = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.productos);
    const [loading, setLoading] = useState(true);
    const [balanceadoProducts, setBalanceadoProducts] = useState([]);

    const handleViewDetails = (id) => {
        dispatch(setSelectedProductId(id));
    };

    useEffect(() => {
        // Simula una carga de productos desde Redux (aquí puedes despachar una acción para cargar productos)
        setTimeout(() => {
            setLoading(false); // Indica que la carga ha finalizado
        }, 2000); // Simulamos una carga de 2 segundos
    }, []);

    useEffect(() => {
        // Filtrar productos por categoría 'Balanceado' y guardarlos en el local storage
        if (products.length > 0) {
            const filteredProducts = products.filter(product => product.category === 'Balanceado');
            setBalanceadoProducts(filteredProducts);
            localStorage.setItem('balanceadoProducts', JSON.stringify(filteredProducts));
        }
    }, [products]);

    useEffect(() => {
        // Cargar balanceadoProducts desde el local storage cuando el componente se monta
        const storedProducts = localStorage.getItem('balanceadoProducts');
        if (storedProducts) {
            setBalanceadoProducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleAddToCart = (product) => {
        const productToAdd = {
            id: product.id, // Asegúrate de que el id esté en el formato correcto
            nombre: product.nombre,
            category: product.category,
            precio: product.precio,
            url: product.url
        };
        dispatch(addToCart(productToAdd));
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-300 to-white p-4">
           <div className="flex flex-col items-center mt-20">
    <img src={perro} alt="" className="w-48 h-48" />
    <h2 className="text-4xl font-bold text-gray-800 mt-4">Comida para tu mascota</h2>
</div>
            {loading ? (
                <p className="text-3xl font-bold text-gray-700">Cargando productos...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                    {balanceadoProducts.length > 0 ? (
                        // Si hay productos, mapea para renderizar cada producto con botón "Agregar al carrito"
                        balanceadoProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                                <img src={product.url} alt="Producto" className="w-40 h-40 object-cover rounded-full mx-auto" />
                                <div className="mt-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.nombre}</h3>
                                    <p className="text-gray-600">Precio: ${product.precio}</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            <AddShoppingCartIcon className="mr-2" />
                                            <span>Agregar al carrito</span>
                                        </button>
                                        <Link
                                            to={`/product-detail/${product.id}`}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-center"
                                            onClick={() => handleViewDetails(product.id)}
                                        >
                                            Ver detalle
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Si no hay productos, muestra un mensaje
                        <p className="text-3xl font-bold text-gray-700">No hay productos disponibles.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ComponentBalanceado;
