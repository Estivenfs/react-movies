import React, {useState} from 'react'

export const Buscador = ({listMovies, setListMovies}) => {

    const [search, setSearch] = useState('');
    const [notFind, setNotFind] = useState(false);

    const searchMovie = (e) => {
        //Crear estado y actualizarlo con el valor del input
        setSearch(e.target.value)

        //Filtrar el listado completo de movies
        let findMovies = listMovies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
        if(search.length <=1 || findMovies.length === 0){
            findMovies = JSON.parse(localStorage.getItem('movies'))
            setNotFind(true)
        }else{
            setNotFind(false)
        }

        

        

        //Actualizar el estado de movies
        setListMovies(findMovies)
        
    }
    return (
        <div className="search">
            <h3 className="title">Buscador: {search}</h3>
            {(notFind && search.length>2) &&<span className='no-encontrado'>No se han encontrado resultados</span>}
            <form >
                <input type="text" name="search" id="search_field" autoComplete='off' onChange={searchMovie} />
                <button id='search'>Buscar</button>
            </form>
        </div>
    )
}
