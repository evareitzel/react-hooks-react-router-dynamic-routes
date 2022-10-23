// import React from "react"
import {Link} from "react-router-dom"

function MoviesList({movies}){

  const renderMovies = Object.keys(movies).map(movieID => (
    <li key={movieID}>
      <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    </li>
  ))

  return(
    <div>
      <h1>Movies List!</h1>
      <ul>{renderMovies}</ul>
    </div>
  )
}

export default MoviesList