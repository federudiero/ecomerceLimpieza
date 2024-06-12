import React from 'react'
import style from '../componenteDescuento/Descuento.module.css'
import img from '../../img/1169767-servicio-de-limpieza-calims-banner-3limpieza-3.jpg'
function ComponenteDescuento() {
  return (
    <div className={style.ContainerDescuentos}>
        <h2 className={style.h2Descuento}>10% off con tu compra mayor a $20000 </h2>
       <img className={style.imgDescuento} src={img} alt="" />
        
      </div>
  )
}

export default ComponenteDescuento