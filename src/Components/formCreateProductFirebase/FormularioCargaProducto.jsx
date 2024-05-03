import React, { useEffect, useState } from 'react';
import { app, db } from '../../firebase/Firebase';
import style from './FormularioCargaProducto.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function FormularioCargaProducto() {
  const [archivoUrl, setArchivoUrl] = useState('');
  const [docus, setDocus] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null); 
  const [formData, setFormData] = useState({
    nombre: '',
    category: '',
    precio: ''
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
    const { nombre, category, precio } = formData;

    if (!nombre || !archivoUrl || !category || isNaN(precio)) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    try {
      if (editingProductId) {
        await db.collection('productos').doc(editingProductId).update({
          nombre: nombre,
          category: category,
          precio: parseFloat(precio),
          url: archivoUrl
        });
        alert('Producto actualizado correctamente.');
        setEditingProductId(null);
      } else {
        await db.collection('productos').add({
          nombre: nombre,
          category: category,
          precio: parseFloat(precio),
          url: archivoUrl
        });
        alert('Producto agregado correctamente.');
      }
      setFormData({
        nombre: '',
        category: '',
        precio: ''
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
      precio: producto.precio.toString()
    });
    setArchivoUrl(producto.url);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    <div className={style.containerForm}>
      <form className={style.form} style={{ margin: '100px' }} onSubmit={submitHandler}>
        <input type="file" onChange={archivoHandler} />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del Producto"
          value={formData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={formData.category}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={formData.precio}
          onChange={handleInputChange}
        />
        <button type="submit">{editingProductId ? 'Actualizar' : 'Enviar'}</button>
      </form>

      <div>
        <div className={style.filtrar}>

        <select
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
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

        <ul className={style.listaProductos}>
          {productosFiltrados.map((producto) => (
            <li className={style.producto} key={producto.id}>
              <img className={style.imagen} src={producto.url} alt={producto.nombre} width="100" />
              <strong>{producto.nombre}</strong>
              <strong>{producto.category}</strong>
              <strong>${producto.precio}</strong>
              <br />
              <div className={style.buttons}>
                <button onClick={() => eliminarProducto(producto.id)}>
                  <DeleteForeverIcon />
                </button>
                <button onClick={() => editarProducto(producto)}>
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
