import React, { useRef } from 'react';
import Header from '../Components/header/Header';
import Cards from '../Components/cards/Cards';
import ComponenteDescuento from '../Components/componenteDescuento/ComponenteDescuento';
import ComoTrabajo from '../Components/comoTrabajo/ComoTrabajo';
import Carousel from '../Components/carousel/Carousel';
import style from '../views/Home.module.css';
import Carousel2 from '../Components/carousel2/Carousel2';

function Home() {
  const cardsRef = useRef(null);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

  return (
    <div>
      <Header
        cardsRef={cardsRef}
        carouselRef={carouselRef}
        carouselRef2={carouselRef2}
      />
      <div className={style.containerHeader}>
        <div className={`${style.flexContainer} flex flex-col items-center justify-center `}>
          <br />
          <ComoTrabajo />
          <div ref={carouselRef2}>
            <Carousel2 />
          </div>
          <ComponenteDescuento />
        </div>
      </div>
      <div className={style.containerCardsHome} ref={cardsRef}>
        <Cards />
      </div>
      <div ref={carouselRef}>
        <Carousel />
      </div>
    </div>
  );
}

export default Home;
