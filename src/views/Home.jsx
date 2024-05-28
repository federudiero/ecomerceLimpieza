import React, { useRef, useEffect, useState } from 'react';
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

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (scrollPosition && cardsRef.current) {
      window.scrollTo({
        top: cardsRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  }, [scrollPosition]);

  const handleScrollToCards = () => {
    if (cardsRef.current) {
      setScrollPosition(cardsRef.current.offsetTop);
    }
  };

  const handleScrollToCarousel = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.offsetTop);
    }
  };

  const handleScrollToCarousel2 = () => {
    if (carouselRef2.current) {
      setScrollPosition(carouselRef2.current.offsetTop);
    }
  };

  return (
    <div>
      <Header
        scrollToCards={handleScrollToCards}
        scrollToCarousel={handleScrollToCarousel}
        scrollToCarousel2={handleScrollToCarousel2}
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
