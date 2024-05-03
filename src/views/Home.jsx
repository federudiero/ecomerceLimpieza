import React from 'react';
import Header from '../Components/header/Header';
import Cards from '../Components/cards/Cards';
import Filter from '../Components/filter/Filter';
import ComponenteDescuento from '../Components/componenteDescuento/ComponenteDescuento';
import ComoTrabajo from '../Components/comoTrabajo/ComoTrabajo';
import Carousel from '../Components/carousel/Carousel';
import style from '../views/Home.module.css';

function Home() {
  return (
    <div>
      <Header />
      <div className={style.containerHeader}>
        {/* Utiliza las clases de Tailwind CSS para centrar vertical y horizontalmente */}
        <div className="flex flex-col items-center justify-center space-y-12 mt-12 ">
          {/* Añade el espacio entre los componentes con space-y-12 */}
          <ComoTrabajo />
          <ComponenteDescuento />
          <Filter />
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default Home;