import { DATA_JSON, FILTER_BY_CATEGORY, RESET_FILTERS, SET_SELECTED_PRODUCT_ID, UPDATE_PRODUCT_QUANTITY, ADD_TO_CART, UPDATE_CART, REMOVE_CART, UPDATE_CART_COUNT, SEARCH_BY_NAME, SHOW_ALERT, HIDE_ALERT } from '../redux/actionsType';

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
  cartCounts: JSON.parse(localStorage.getItem('cartCounts')) || {},
  searchTerm: '',
  alertMessage: null
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
        const updatedCart = state.cart.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              cantidad: item.cantidad + 1
            };
          }
          return item;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart
        };
      } else {
        const updatedCart = [...state.cart, { ...action.payload, cantidad: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return {
          ...state,
          cart: updatedCart
        };
      }

    case UPDATE_CART:
      localStorage.setItem('cart', JSON.stringify(action.payload));
      return {
        ...state,
        cart: action.payload
      };

    case REMOVE_CART:
      const currentCart = state.cart;
      const updatedCartRemove = currentCart.filter(item => item.id !== action.payload);
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
      localStorage.setItem('cartCounts', JSON.stringify(updatedCartCounts));
      return {
        ...state,
        cartCounts: updatedCartCounts
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        searchTerm: action.payload
      };

    case SHOW_ALERT:
      return {
        ...state,
        alertMessage: action.payload
      };

    case HIDE_ALERT:
      return {
        ...state,
        alertMessage: null
      };

    default:
      return state;
  }
};

export default rootReducer;
