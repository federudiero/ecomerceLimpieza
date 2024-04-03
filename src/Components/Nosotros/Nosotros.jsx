import React from 'react';
//import image from './nosotros-image.jpg'; // Importa la imagen que deseas utilizar
import style from '../Nosotros/Nosotros.module.css'
import img from '../../img/limpiar-utensilios-limpieza-1-a.jpg'
const Nosotros = () => {
  return (
    <div className={style.divNosotros}>
      <div className={style.divh2Nosotros} style={{ flex: 1 }}>
        <h2 className={style.h2Nosotros} >Nuestra Empresa</h2>
        
<p className={style.pNosotros}>
  Somos una empresa comprometida con la calidad y la excelencia en el suministro de productos de limpieza. Nos esforzamos por ofrecer a nuestros clientes los mejores productos que garanticen la higiene y el bienestar en sus hogares y lugares de trabajo. Con una amplia gama de productos, desde detergentes hasta desinfectantes y accesorios de limpieza, estamos aquí para satisfacer todas sus necesidades de limpieza de manera efectiva y eficiente. Nuestro objetivo es proporcionar soluciones que no solo limpien, sino que también protejan su salud y el medio ambiente. Confíe en nosotros para mantener su espacio limpio y saludable.
</p>
      </div>
      <div style={{ flex: 1 }}>
        <img className={style.imgNosotros} src={img} alt="Nosotros" style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default Nosotros;
