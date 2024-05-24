import React from 'react';
import limpieza from '../../img/301595083_450215287155449_2726574737863607917_n.jpg';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/actions';
import style from '../header/Header.module.css';
import { Link } from 'react-router-dom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CategoryIcon from '@mui/icons-material/Category';
import PetsIcon from '@mui/icons-material/Pets';

function Header({ scrollToCards, scrollToCarousel, scrollToCarousel2 }) {
  const dispatch = useDispatch();

  return (
    <div className="hero min-h-screen relative overflow-hidden border-b-2 border-blue-500">
      <div className={style.headerContainerimgbg}></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-5xl font-bold text-white">Limpiar es más fácil con nosotros</h1>
          <p className="mb-5 text-white font-semibold text-xl">Tenemos todo lo que necesitas para que vos y tus ambientes siempre brillen.</p>
          <Link
            to="/#"
            className={style.buttonCustom}
            onClick={scrollToCards}
          >
            <CategoryIcon />
            Ver Catálogo de Productos
          </Link>
          <Link
            to="/#"
            className={style.buttonCustom}
            onClick={scrollToCarousel}
          >
            <LocalLaundryServiceIcon />
            Ver Combos de Limpieza
          </Link>
          <Link
            to="/#"
            className={style.buttonCustom}
            onClick={scrollToCarousel2}
          >
            <PetsIcon />
            Balanceado Animales
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
