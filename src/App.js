// App.js
import React, { useState } from 'react';
import './App.css'; // Importa los estilos
import imagen from './imagen.png'; // Importa la imagen principal

function Header() {
  return (
    <header>
      <h1>Juego de Adivinanza</h1>
      <img src={imagen} alt="Imagen del juego" />
    </header>
  );
}

function Juego({ maximo }) {
  const [numeroJugador, setNumeroJugador] = useState(0);
  const [numeroMaquina, setNumeroMaquina] = useState(
    Math.floor(Math.random() * maximo) + 1
  );
  const [resultado, setResultado] = useState('');
  const [esCorrecto, setEsCorrecto] = useState(false); // Estado para verificar si el número es correcto

  const manejarCambio = (e) => {
    setNumeroJugador(Number(e.target.value));
  };

  const verificarNumero = () => {
    if (numeroJugador === numeroMaquina) {
      setResultado('¡Felicidades! Adivinaste el número.');
      setEsCorrecto(true); // Cambia a verdadero si acierta
    } else {
      setResultado('Fallaste, intenta nuevamente.');
      setEsCorrecto(false); // Cambia a falso si falla
    }
    setNumeroMaquina(Math.floor(Math.random() * maximo) + 1); // Genera un nuevo número aleatorio
  };

  return (
    <div>
      <form>
        <input
          type="number"
          min="1"
          max={maximo}
          value={numeroJugador}
          onChange={manejarCambio}
          placeholder="Ingresa un número del 1 al 10"
        />
        <button type="button" onClick={verificarNumero}>
          Adivinar
        </button>
      </form>
      <div className={`resultado ${esCorrecto ? 'correcto' : ''}`}>
        {resultado}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Juego maximo={10} />
      <footer>¡Intenta adivinar el número entre 1 y 10!</footer>
    </div>
  );
}

export default App;
