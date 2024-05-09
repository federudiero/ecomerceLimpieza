import React from 'react';
import limpieza from '../../img/301595083_450215287155449_2726574737863607917_n.jpg';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/actions';
import style from '../header/Header.module.css';
import { Link } from 'react-router-dom';

function Header({scrollToCards ,carouselRef}) {
  const dispatch = useDispatch();

  return (
    <div className="hero min-h-screen relative overflow-hidden border-b-2 border-blue-500 ">
      <div
        className={style.headerContainerimgbg}
        
      ></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto"> {/* mx-auto para centrar el contenido */}
          <h1 className="mb-5 text-5xl font-bold text-white">Limpiar es más fácil con nosotros</h1>
          <p className="mb-5 text-white font-semibold text-xl">Tenemos todo lo que necesitas para que vos y tus ambientes siempre brillen.</p>
          <Link
        to="/#" // Mantén el enlace vacío para evitar redirecciones
        className="text-white font-semibold text-lg mt-8 inline-block border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"
        onClick={scrollToCards} // Llama a la función scrollToCards al hacer clic en el enlace
      >
        Ver Catálogo de Productos
      </Link>
          <Link
        to="/#" // Mantén el enlace vacío para evitar redirecciones
        className="text-white font-semibold text-lg mt-8 inline-block border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-500"
        onClick={carouselRef} // Llama a la función scrollToCards al hacer clic en el enlace
      >
        Ver Combos de Limpieza
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
