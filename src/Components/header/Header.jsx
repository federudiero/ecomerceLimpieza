import React from 'react';
import limpieza from '../../img/301595083_450215287155449_2726574737863607917_n.jpg';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../../redux/actions';
import style from '../header/Header.module.css';

function Header() {
  const dispatch = useDispatch();

  return (
    <div className="hero min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${limpieza})`,
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      ></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mx-auto"> {/* mx-auto para centrar el contenido */}
          <h1 className="mb-5 text-5xl font-bold text-white">Limpiar es más fácil con nosotros</h1>
          <p className="mb-5 text-white font-semibold text-xl">Tenemos todo lo que necesitas para que vos y tus ambientes siempre brillen.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
