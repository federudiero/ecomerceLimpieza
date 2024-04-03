import React, { useState, useEffect } from 'react';
import style from './Count.module.css';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Count({ initialValue, onCountChange }) {
    const [count, setCount] = useState(initialValue);
  
    const restar = () => {
      if (count > 1) {
        setCount(count - 1);
        onCountChange(count - 1);
      }
    };
  
    const sumar = () => {
      setCount(count + 1);
      onCountChange(count + 1);
    };
  
    useEffect(() => {
      // Actualizar el estado local si initialValue cambia
      setCount(initialValue);
    }, [initialValue]);
  
    return (
      <div className={style.divCount}>
        <button onClick={restar}><RemoveIcon /></button>
        <h3>{count}</h3>
        <button onClick={sumar}><AddIcon /></button>
      </div>
    );
  }
  

export default Count;
