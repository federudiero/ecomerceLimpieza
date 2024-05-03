import { DATA_JSON, FILTER_BY_CATEGORY, FILTER_BY_PRICE_RANGE, RESET_FILTERS,VIEW_PRODUCT_DETAILS ,SET_SELECTED_PRODUCT_ID,UPDATE_PRODUCT_QUANTITY ,ADD_TO_CART ,UPDATE_CART,REMOVE_CART,UPDATE_CART_COUNT,SEARCH_BY_NAME} from '../redux/actionsType';

import productosJson from '../data/productos.json'; // Importa el archivo JSON
import { collection, getDocs } from 'firebase/firestore';
import {  db } from '../firebase/Firebase';

export const loadProducts = () => {
  return async (dispatch) => {
    try {
      const productsCollection = collection(db, 'productos'); // Nombre de la colección en Firestore
      const querySnapshot = await getDocs(productsCollection);

      const products = [];
      querySnapshot.forEach((doc) => {
        // Construye el objeto de producto desde los datos del documento Firestore
        const product = {
          id: doc.id,
          ...doc.data()
        };
        products.push(product);
      });

      dispatch({
        type: DATA_JSON,
        payload: products
      });
    } catch (error) {
      console.error('Error al cargar productos desde Firestore:', error);
    }
  };
};
export const filterByCategory = (category) => {
    return {
        type: FILTER_BY_CATEGORY,
        payload: category
    };
};

export const filterByPriceRange = (minPrice, maxPrice) => {
    return {
        type: FILTER_BY_PRICE_RANGE,
        payload: { minPrice, maxPrice }
    };
};

export const resetFilters = () => {
    return {
        type: RESET_FILTERS
    };
};

export const viewProductDetails = (productId) => {
    return {
        type: VIEW_PRODUCT_DETAILS,
        payload: productId
    }}
    export const setSelectedProductId = (productId) => {
        return {
            type: 'SET_SELECTED_PRODUCT_ID',
            payload: productId
        };
    };
  

export const updateProductQuantity = (quantity) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: quantity
  };
};
export const addToCart = (product) => {
    return {
      type: ADD_TO_CART,
      payload: product
    };
  };
  
  export const updateCart = (cart) => {
    return {
      type: UPDATE_CART,
      payload: cart
    };
  };
  export const removeCart = (cart) => {
    return {
      type: REMOVE_CART,
      payload: cart
    };
  };
  export const updateCartCount = (itemId, count) => {
    return {
      type: UPDATE_CART_COUNT,
      payload: { itemId, count }
    };
  };
  export const searchByName = searchTerm => ({
    type: SEARCH_BY_NAME,
    payload: searchTerm
});