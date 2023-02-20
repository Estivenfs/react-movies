import React from 'react'

export const Editar = ({movie, getMovies, setListMovies, setEdit}) => {
  const title_component = 'Editar Pelicula';
  const saveEdit = (e,id) => {
    e.preventDefault();
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;
    let movies = getMovies();
    let index = movies.findIndex(movie => movie.id === parseInt(id));
    let movieEdited = {
      id,
      title,
      description
    }
    movies[index] = movieEdited;
    localStorage.setItem('movies', JSON.stringify(movies));
    setListMovies(movies);
    setEdit(0);
  }
  return (
    <div className='edit_form'>
      <h3 className="title">{title_component}</h3>
      <form onSubmit={(e)=>saveEdit(e,movie.id)}>
        <input type="text" name="title" id="title" className='title_edited' defaultValue={movie.title} />
        <textarea name='description' id='description' className='description_edited' defaultValue={movie.description} />
        <input type="submit" value="Actualizar" className='edit' />
      </form>
        
    </div>
  )
}
