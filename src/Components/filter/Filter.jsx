import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory, filterByPriceRange, resetFilters } from '../../redux/actions';
import CategoryIcon from '@mui/icons-material/Category';

import style from './ButtonFilter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const productos = useSelector(state => state.productos);
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

   

    const handleResetFilters = () => {
        dispatch(resetFilters());
    };

    return (
        <div className={style.filtercontainer}>
            <CategoryIcon/>
            <div >
                <select className={style.buttonSelect} defaultValue="All" name="filterByCategory" onChange={handleCategoryFilter}>
                    <option className={style.options} value="All">Todos los productos</option>
                    {uniqueCategories.map(category => (
                        <option className={style.options} key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

           

            <button className={style.buttonResete} onClick={handleResetFilters}>Eliminar Filtros</button>
        </div>
    );
};

export default Filter;