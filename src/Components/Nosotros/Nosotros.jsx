import React from 'react';
import img from '../../img/limpiar-utensilios-limpieza-1-a.jpg';

const Nosotros = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-300 h-screen">
      <div className="md:w-1/2">
        <img src={img} alt="Nosotros" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Empresa</h2>
        <p className="text-lg text-justify text-gray-700">
          Somos una empresa comprometida con la calidad y la excelencia en el suministro de productos de limpieza. Nos esforzamos por ofrecer a nuestros clientes los mejores productos que garanticen la higiene y el bienestar en sus hogares y lugares de trabajo. Con una amplia gama de productos, desde detergentes hasta desinfectantes y accesorios de limpieza, estamos aquí para satisfacer todas sus necesidades de limpieza de manera efectiva y eficiente. Nuestro objetivo es proporcionar soluciones que no solo limpien, sino que también protejan su salud y el medio ambiente. Confíe en nosotros para mantener su espacio limpio y saludable.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;
