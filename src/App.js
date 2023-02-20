import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";


function App() {
    const [listMovies, setListMovies] = useState([]);
  return (
    <div className="layout">
        {/* Cabecera */}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
        </header>

        {/* Barra de Navegacion */}
        <nav className="nav">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="peliculas.html">Peliculas</a></li>
                <li><a href="series.html">Blog</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>

        {/* Contenido Principal */}
        <section className="content" id="content">
            {/* Peliculas */}
           <Listado listMovies={listMovies} setListMovies={setListMovies}></Listado>
        </section>
        {/* Barra lateral */}
        <aside className="lateral">
            <Buscador listMovies={listMovies} setListMovies={setListMovies}></Buscador>
            <Crear setListMovies={setListMovies}></Crear>
        </aside>
        {/* Pie de pagina */}
        <footer className="footer">
            &copy; 2021 - MisPelis 
        </footer>
    </div>
  );
}

export default App;
