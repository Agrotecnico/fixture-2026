import { useState } from 'react';
import './calculadora.css';

function Calculadora() {
  // Estado para almacenar el valor actual en la pantalla
  const [display, setDisplay] = useState('');

  // Función para agregar números u operadores a la pantalla
  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  // Función para limpiar la pantalla (Botón C)
  const handleClear = () => {
    setDisplay('');
  };

  // Función para borrar el último carácter (Botón de flecha/retroceso)
  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  // Función para calcular el resultado final
  const handleCalculate = () => {
    try {
      // Usamos Function para evaluar el string matemático de forma segura en un entorno controlado
      const result = new Function(`return ${display}`)();
      
      if (result === undefined || isNaN(result)) {
        setDisplay('Error');
      } else {
        setDisplay(String(result));
      }
    } catch (error) {
      error && setDisplay('Error');
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Pantalla donde se muestran los números */}
        <div className="display">{display || '0'}</div>

        {/* Panel de Botones */}
        <div className="buttons">
          <button onClick={handleClear} className="btn-operator">C</button>
          <button onClick={handleDelete} className="btn-operator">⌫</button>
          <button onClick={() => handleClick('/')} className="btn-operator">/</button>
          <button onClick={() => handleClick('*')} className="btn-operator">*</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')} className="btn-operator">-</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')} className="btn-operator">+</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={handleCalculate} className="btn-equal">=</button>

          <button onClick={() => handleClick('0')} className="btn-zero">0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculadora;