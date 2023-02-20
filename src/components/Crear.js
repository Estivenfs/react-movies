import React, {useState} from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Crear = ({setListMovies}) => {

    const titleComponent = "Añadir pelicula";

    const [ movieState, setMovieState ] = useState({
        title: '',
        description: ''
    });

    const { title, description } = movieState;

    const getFormValue = (e) => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        
        //crear objeto de pelicula
        let movie = {
            id: new Date().getTime(),
            title,
            description
        }
        // guardar estado
        setMovieState(movie);

        //Actualizar el estado del listado de peliculas
        setListMovies(element => {
            let res;
            Array.isArray(element) ?
            res = [...element, movie] : res = [movie];
            return res;
        });

        //guardar en el almacenamiento local
        SaveInStorage("movies",movie);
        
    }

    

    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>
            <strong>
                {(title && description) && "Has creado la pelicula: "+ title}
            </strong>
            <form onSubmit={getFormValue}>
                <input type="text" name="title" id="title" placeholder="Titulo" />
                <textarea placeholder="Descripcion" name='description' id="description"></textarea>
                <input type="submit" value="Guardar" id='save'/>
            </form>
        </div>
    )
}
