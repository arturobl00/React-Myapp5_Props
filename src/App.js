import React from 'react';
import Comentario from './componentes/Comentarios';
import Saludar from './componentes/Saludo';

function App() {
  const sujeto = {
    nombre: 'Jacinto Aguilar Sifuentes',
    urlImagen: 'https://via.placeholder.com/64',
    texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ipsa reprehenderit hic doloremque deserunt assumenda, fuga modi illo possimus illum nostrum omnis repellendus neque facere eligendi quaerat debitis quam sint!'
  }

  return (
    <div className="container">
      <h1>Componentes props</h1>
      <p>Conceptualmente, los componentes son como las funciones de JavaScript.
       Aceptan entradas arbitrarias (llamadas “props”) y devuelven a React elementos
      que describen lo que debe aparecer en la pantalla.</p>
      <Saludar nombre="Jacinto" apellido="Aguilar" edad={20}/>

      <Comentario objeto={sujeto} />
    </div>
  );
}

export default App;
