import React from "react";
import Movies from "./component/Movies/Movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

export default App;

//crear un directorio db en sr, dentro un archivo movies.json y pegamos el array de peliculas. Crea el componente "movies" que muestra por defecto todas las peliculas. Añade 2 botones con 2 generos de tu eleccion, cada uno de ellos filtrara las peliculas por ese genero. La maquetacion y los estilos quedan a tu eleccion