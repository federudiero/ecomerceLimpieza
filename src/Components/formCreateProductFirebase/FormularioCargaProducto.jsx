import React, { useEffect, useState } from 'react';
import { app, db } from '../../firebase/Firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { capitalize } from 'lodash';

function FormularioCargaProducto() {
  const [archivoUrl, setArchivoUrl] = useState('');
  const [docus, setDocus] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null); 
  const [formData, setFormData] = useState({
    nombre: '',
    category: '',
    precio: '',
    descripcion: ''
  });
  const [filtroCategoria, setFiltroCategoria] = useState('');

  const archivoHandler = async (e) => {
    const archivo = e.target.files[0];
    const storageRef = app.storage().ref();
    const archivoPath = storageRef.child(archivo.name);
    await archivoPath.put(archivo);
    const enlaceUrl = await archivoPath.getDownloadURL();
    setArchivoUrl(enlaceUrl);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let { nombre, category, precio, descripcion } = formData;

    nombre = capitalize(nombre);
    category = capitalize(category);

    if (!nombre || !archivoUrl || !category || isNaN(precio) || !descripcion) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    try {
      if (editingProductId) {
        await db.collection('productos').doc(editingProductId).update({
          nombre,
          category,
          precio: parseFloat(precio),
          descripcion,
          url: archivoUrl
        });
        alert('Producto actualizado correctamente.');
        setEditingProductId(null);
      } else {
        await db.collection('productos').add({
          nombre,
          category,
          precio: parseFloat(precio),
          descripcion,
          url: archivoUrl
        });
        alert('Producto agregado correctamente.');
      }

      setFormData({
        nombre: '',
        category: '',
        precio: '',
        descripcion: ''
      });
      setArchivoUrl('');

    } catch (error) {
      console.error('Error al guardar el producto:', error);
      alert('Hubo un problema al guardar el producto.');
    }
  };

  const eliminarProducto = async (productId) => {
    try {
      await db.collection('productos').doc(productId).delete();
      const updatedProductos = docus.filter((producto) => producto.id !== productId);
      setDocus(updatedProductos);
      alert('Producto eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      alert('Hubo un problema al eliminar el producto.');
    }
  };

  const editarProducto = (producto) => {
    setEditingProductId(producto.id);
    setFormData({
      nombre: producto.nombre,
      category: producto.category,
      precio: producto.precio.toString(),
      descripcion: producto.descripcion || ''
    });
    setArchivoUrl(producto.url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const filtrarProductosPorCategoria = (categoria) => {
    if (categoria === '') {
      return docus; 
    } else {
      return docus.filter((producto) => producto.category === categoria);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('productos').get();
        const productos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDocus(productos);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchData();
  }, []);

  const productosFiltrados = filtrarProductosPorCategoria(filtroCategoria);

  return (
    <div className="container mx-auto my-10 p-8 bg-gray-800 text-white shadow-md rounded-lg">
      <form className="space-y-4" onSubmit={submitHandler}>
        <input 
          type="file" 
          onChange={archivoHandler} 
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Producto"
          value={formData.nombre}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={formData.category}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
        />
        <textarea
          name="descripcion"
          placeholder="Descripción del Producto"
          value={formData.descripcion}
          onChange={handleInputChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          {editingProductId ? 'Actualizar' : 'Enviar'}
        </button>
      </form>

      <div className="mt-8">
        <div className="mb-4">
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
            className="block w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
          >
            <option value="">Todos</option>
            {Array.from(new Set(docus.map((producto) => producto.category))).map(
              (categoria) => (
                <option key={categoria} value={categoria}>
                  {categoria}
                </option>
              )
            )}
          </select>
        </div>

        <ul className="space-y-4">
          {productosFiltrados.map((producto) => (
            <li key={producto.id} className="p-4 border border-gray-600 bg-gray-700 text-white rounded-md flex flex-col items-start">
              <img src={producto.url} alt={producto.nombre} className="w-24 h-24 object-cover mb-2"/>
              <strong className="text-lg">{producto.nombre}</strong>
              <span className="text-sm text-gray-400">{producto.category}</span>
              <span className="text-lg font-semibold">${producto.precio}</span>
              <div className="mt-2 flex space-x-2">
                <button onClick={() => eliminarProducto(producto.id)} className="bg-red-500 text-white p-2 rounded-md">
                  <DeleteForeverIcon />
                </button>
                <button onClick={() => editarProducto(producto)} className="bg-yellow-500 text-white p-2 rounded-md">
                  <EditIcon />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FormularioCargaProducto;
