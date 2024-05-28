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
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
      <div className="flex-grow">
        <img className="w-full h-56 object-cover" src={url} alt="Product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-800">{nombre}</div>
          <p className="text-gray-600 text-base mb-2">{category}</p>
          <p className="text-gray-800 text-xl">${precio}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full focus:outline-none flex items-center justify-center"
          onClick={handleAddToCart}
        >
          <AddShoppingCartIcon className="mr-2" />
          <span>Agregar al carrito</span>
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
