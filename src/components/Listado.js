import React, { useEffect , useState} from 'react'
import { Editar } from './Editar';

export const Listado = ({listMovies,setListMovies}) => {

  //const [listMovies, setListMovies] = useState([]);
  const [edit, setEdit] = useState(0);
  useEffect(() => {
    getMovies()
  }, []);



  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem('movies'))
    setListMovies(movies)
    return movies;
  }

  const deleteMovie = (id) => {
    let movies = getMovies();
    let moviesFilter = movies.filter(movie => movie.id !== parseInt(id))
    localStorage.setItem('movies', JSON.stringify(moviesFilter))
    setListMovies(moviesFilter)
  }

  return (
    <>
      {listMovies != null ? listMovies.map((movie) => {
        return (
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>
            <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
            <button className="delete" onClick={ () => deleteMovie(movie.id)}>Borrar</button>
            {edit === movie.id && (
              <Editar movie={movie}
                getMovies={getMovies}
                setListMovies={setListMovies}
                setEdit={setEdit}
              />
              )}
            {/* Aparece el formulario de editar */}
          </article>
        )
      }) : <h1>No hay peliculas</h1>}
            

           
    </>
  )
}
