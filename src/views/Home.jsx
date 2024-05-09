import React, { useRef } from 'react';
import Header from '../Components/header/Header';
import Cards from '../Components/cards/Cards';
import Filter from '../Components/filter/Filter';
import ComponenteDescuento from '../Components/componenteDescuento/ComponenteDescuento';
import ComoTrabajo from '../Components/comoTrabajo/ComoTrabajo';
import Carousel from '../Components/carousel/Carousel';
import style from '../views/Home.module.css';

function Home() {
  const cardsRef = useRef(null); // Referencia para la sección de tarjetas

  // Función para desplazarse a la sección de tarjetas cuando se hace clic en el enlace
  const scrollToCards = () => {
    if (cardsRef.current) {
      window.scrollTo({
        top: cardsRef.current.offsetTop, // Desplaza hasta la posición superior de la sección de tarjetas
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  };
  const carouselRef = useRef(null); // Referencia para la sección de tarjetas

  // Función para desplazarse a la sección de tarjetas cuando se hace clic en el enlace
  const scrollToCarousel = () => {
    if (carouselRef.current) {
      window.scrollTo({
        top: carouselRef.current.offsetTop, // Desplaza hasta la posición superior de la sección de tarjetas
        behavior: 'smooth' // Desplazamiento suave
      });
    }
  };

  return (
    <div>
      <Header scrollToCards={scrollToCards} carouselRef={scrollToCarousel} /> {/* Pasa la función scrollToCards como prop al Header */}
      <div className={style.containerHeader}>
        {/* Utiliza las clases de Tailwind CSS para centrar vertical y horizontalmente */}
        <div  className="flex flex-col items-center justify-center space-y-12 mt-12 ">
          {/* Añade el espacio entre los componentes con space-y-12 */}
          <ComoTrabajo />
          <ComponenteDescuento />

         <div ref={carouselRef}>


          <Carousel />
         </div>
       
          <Filter />
        </div>
      </div>
      <div ref={cardsRef}> {/* Asigna la referencia a la sección de tarjetas */}
        <Cards />
      </div>
    </div>
  );
}

export default Home;
