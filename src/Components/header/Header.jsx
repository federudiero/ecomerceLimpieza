import React from 'react';
import limpieza from '../../img/301595083_450215287155449_2726574737863607917_n.jpg';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/actions';
import style from '../header/Header.module.css';
import { Link } from 'react-router-dom';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import CategoryIcon from '@mui/icons-material/Category';
import PetsIcon from '@mui/icons-material/Pets';

function Header({ cardsRef, carouselRef, carouselRef2 }) {
  const dispatch = useDispatch();

  const scrollToElement = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero min-h-screen relative overflow-hidden">
      <div className={style.headerContainerimgbg}></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto">
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold text-black">Limpiar es más fácil con nosotros</h1>
          <p className="mb-5 text-black font-semibold text-lg">Tenemos todo lo que necesitas para que vos y tus ambientes siempre brillen.</p>
          <div className='flex flex-col items-center space-y-4'>
            <button
              className={style.buttonCustom}
              onClick={() => scrollToElement(cardsRef)}
            >
              <CategoryIcon />
              <br />
              Ver Catálogo de Productos
            </button>
            <button
              className={style.buttonCustom}
              onClick={() => scrollToElement(carouselRef)}
            >
              <LocalLaundryServiceIcon />
              <br />
              Ver Combos de Limpieza
            </button>
            <button
              className={style.buttonCustom}
              onClick={() => scrollToElement(carouselRef2)}
            >
              <PetsIcon />
              <br />
              Balanceado Animales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
