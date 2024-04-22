import React from 'react'
import img from '../../img/313cdbaf-c22a-49fc-bb6f-087501ed447d.png'
function Carousel() {
  return (
    <div className="carousel carousel-center rounded-box">
  
  <div className="carousel-item">
    <img src={img} alt="Pizza" />
  </div>
</div>
  )
}

export default Carousel