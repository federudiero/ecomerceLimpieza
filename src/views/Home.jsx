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

  const scrollToCards = () => {
    if (cardsRef.current) {
      window.scrollTo({
        top: cardsRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCarousel = () => {
    if (carouselRef.current) {
      window.scrollTo({
        top: carouselRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToCarousel2 = () => {
    if (carouselRef2.current) {
      window.scrollTo({
        top: carouselRef2.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Header
        scrollToCards={scrollToCards}
        scrollToCarousel={scrollToCarousel}
        scrollToCarousel2={scrollToCarousel2}
      />
      <div className={style.containerHeader}>
        <div className={`${style.flexContainer} flex flex-col items-center justify-center `}>
          <ComponenteDescuento />
          <br />
          <ComoTrabajo />
      <div ref={carouselRef2}>
        <Carousel2 />
      </div>
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
