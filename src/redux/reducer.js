import { DATA_JSON, FILTER_BY_CATEGORY , RESET_FILTERS,SET_SELECTED_PRODUCT_ID ,UPDATE_PRODUCT_QUANTITY ,ADD_TO_CART,UPDATE_CART ,REMOVE_CART,UPDATE_CART_COUNT} from '../redux/actionsType';
import { VIEW_PRODUCT_DETAILS } from '../redux/actionsType';



const initialState = {
  productos: [],
  filteredProductos: [],
  filters: {
    category: null,
    priceRange: null
  },
  selectedProductId: null,
  selectedProductQuantity: 1,
  cart: [],
  cartCounts: JSON.parse(localStorage.getItem('cartCounts')) || {} // Cargar los recuentos de productos desde el almacenamiento local
};
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_JSON:
            return {
                ...state,
                productos: action.payload
            };

            case FILTER_BY_CATEGORY:
                const filteredByCategory = state.productos.filter(producto => producto.category === action.payload);
                return {
                    ...state,
                    filteredProductos: filteredByCategory,
                    filters: {
                        ...state.filters,
                        category: action.payload
                    }
                };
                
            case RESET_FILTERS:
                return {
                    ...state,
                    filteredProductos: state.productos,
                    filters: {
                        category: null,
                        priceRange: null
                    }
                };
                
                case SET_SELECTED_PRODUCT_ID:
      return {
        ...state,
        selectedProductId: action.payload
      };
    case UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        selectedProductQuantity: action.payload
      };

      
      case ADD_TO_CART:
  const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

  if (existingItemIndex !== -1) {
    // Si el producto ya está en el carrito, simplemente incrementa su cantidad
    const updatedCart = state.cart.map((item, index) => {
      if (index === existingItemIndex) {
        return {
          ...item,
          cantidad: item.cantidad + 1 // Incrementa la cantidad
        };
      }
      return item;
    });
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardar en localStorage
    return {
      ...state,
      cart: updatedCart
    };
  } else {
    // Si es un producto nuevo, agrégalo al carrito con cantidad 1
    const updatedCart = [...state.cart, { ...action.payload, cantidad: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Guardar en localStorage
    return {
      ...state,
      cart: updatedCart
    };
  }


case 'UPDATE_CART':
  localStorage.setItem('cart', JSON.stringify(action.payload)); // Guardar en localStorage
  return {
    ...state,
    cart: action.payload
  };
  case REMOVE_CART:
    // Obtener el carrito del estado actual
    const currentCart = state.cart;
  
    // Filtrar el carrito para remover el objeto específico
    const updatedCartRemove = currentCart.filter(item => item.id !== action.payload);
  
    // Actualizar el estado global del carrito con el nuevo array sin el objeto removido
    return {
      ...state,
      cart: updatedCartRemove
    };
    

    case UPDATE_CART_COUNT:
      const { itemId, count } = action.payload;
      const updatedCartCounts = {
        ...state.cartCounts,
        [itemId]: count
      };
      localStorage.setItem('cartCounts', JSON.stringify(updatedCartCounts)); // Guardar recuentos actualizados en localStorage
      return {
        ...state,
        cartCounts: updatedCartCounts
      };



            default:
                return state;
        }
};

export default rootReducer;
