import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, resetFilters, searchByName } from '../../redux/actions';
import CategoryIcon from '@mui/icons-material/Category';

const Filter = () => {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.productos);
    const searchTerm = useSelector(state => state.searchTerm);
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        // Extraer categorías únicas de los productos
        const categories = productos.reduce((acc, product) => {
            if (!acc.includes(product.category)) {
                return [...acc, product.category];
            }
            return acc;
        }, []);
        setUniqueCategories(categories);
    }, [productos]);

    const handleCategoryFilter = event => {
        const category = event.target.value;
        if (category === "All") {
            // Si se selecciona "All", resetea los filtros
            dispatch(resetFilters());
        } else {
            // Si se selecciona una categoría específica, aplica el filtro por categoría
            dispatch(filterByCategory(category));
        }
    };

    const handleSearch = event => {
        const term = event.target.value;
        dispatch(resetFilters());
        dispatch(searchByName(term));
    };

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className="flex flex-col lg:flex-row items-center p-4 bg-white shadow-md rounded-lg">
            <div className="flex items-center mb-4 lg:mb-0 lg:mr-4">
                <CategoryIcon className="mr-2"/>
                <h3 className="text-xl font-semibold">Categorías</h3>
            </div>
            <div className="mb-4 lg:mb-0 lg:mr-4">
                <select className="form-select block w-full mt-1 bg-white text-black border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" defaultValue="All" name="filterByCategory" onChange={handleCategoryFilter}>
                    <option value="All">Todos los productos</option>
                    {uniqueCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4 lg:mb-0 lg:mr-4 w-full">
                <input type="text" placeholder="Buscar..." className="input input-bordered w-full bg-white border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={searchTerm} onChange={handleSearch} />
            </div>
            <button className="btn bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" onClick={handleResetFilters}>Eliminar Filtros</button>
        </div>
    );
};

export default Filter;
