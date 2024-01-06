import "./Movies.css";
import movies from "../../db/movies.json";
import { useState } from "react";
import MoviesWrapper from "./MoviesWrapper";
import MoviesMain from "./MoviesMain";
import Card from "./Card";

function Movies() {
  const [moviesList, setMoviesList] = useState(movies);
  const [fadeIn, setFadeIn] = useState(true);
  const changeVisibility = (toShow) => {
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
      setMoviesList(toShow);
    }, 500);
  };

  const filterComedy = () => {
    let comedyMovies = movies.filter((movie) => {
      return movie.genre.includes("Comedy");
    });
    changeVisibility(comedyMovies);
  };
  const filterDrama = () => {
    let dramaMovies = movies.filter((movie) => {
      return movie.genre.includes("Drama");
    });
    changeVisibility(dramaMovies);
  };
  const noFilter = () => {
    changeVisibility(movies);
  };
  return (
    <MoviesMain>
      <div className="actions">
        <button onClick={noFilter}>All</button>
        <button onClick={filterComedy}>Comedy</button>
        <button onClick={filterDrama}>Drama</button>
      </div>
      <MoviesWrapper>
        {moviesList.map((movie) => (
          <Card key={movie.id} movie={movie} fadeIn={fadeIn}></Card>
        ))}
      </MoviesWrapper>
    </MoviesMain>
  );
}

// import React, { useState } from "react";
// import moviesData from "../db/movies.json";

// const Movies = () => {
//   const [movies, setMovies] = useState(moviesData);
//   const [filteredGenre, setFilteredGenre] = useState(null);

//   const handleFilterByGenre = (genre) => {
//     if (genre === filteredGenre) {
//       // Si el mismo género está seleccionado nuevamente, muestra todas las películas
//       setMovies(moviesData);
//       setFilteredGenre(null);
//     } else {
//       // Filtra las películas por el género seleccionado
//       const filteredMovies = moviesData.filter((movie) => movie.genre === genre);
//       setMovies(filteredMovies);
//       setFilteredGenre(genre);
//     }
//   };

//   return (
//     <div>
//       <h1>Movies</h1>
//       <div>
//         <button onClick={() => handleFilterByGenre("Comedy")}>Comedy</button>
//         <button onClick={() => handleFilterByGenre("Drama")}>Drama</button>
//       </div>
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie.id}>{`${movie.title} - ${movie.genre}`}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default Movies;
