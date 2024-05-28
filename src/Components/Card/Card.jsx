import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSelectedProductId, addToCart } from '../../redux/actions'; 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Card({ id, nombre, category, precio, url }) {
  const dispatch = useDispatch();

  const handleViewDetails = () => {
    dispatch(setSelectedProductId(id));
  };

  const handleAddToCart = () => {
    const product = { id, nombre, category, precio, url };
    dispatch(addToCart(product));
  };

  return (
    <div className="w-full sm:w-48 rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between transform transition duration-300 hover:shadow-2xl hover:scale-105">
      <div className="flex-grow">
        <img className="w-full h-48 object-contain sm:object-cover" src={url} alt="Product" />
        <div className="px-4 py-2">
          <div className="font-bold text-lg mb-2 text-gray-800">{nombre}</div>
          <p className="text-gray-600 text-sm mb-2">{category}</p>
          <p className="text-gray-800 text-lg">${precio}</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full focus:outline-none flex items-center justify-center shadow-md transition duration-300 transform hover:scale-105"
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon className="mr-2" />
          <span className="text-gray-800 text-sm">Agregar al carrito</span>
        </button>
        <Link
          to={`/product-detail/${id}`}
          className="text-blue-500 hover:underline focus:outline-none mt-4 flex items-center justify-center"
          onClick={handleViewDetails}
        >
          <span>Ver detalle</span>
        </Link>
      </div>
    </div>
  );
}

export default Card;
