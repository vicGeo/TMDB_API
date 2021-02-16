//Claves de la API TMDB
const API_KEY = 'ed8717a7e8e8309c83f2ad4db5fbb610';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=ed8717a7e8e8309c83f2ad4db5fbb610&language=es-ES';


//Seleccionamos elementos del DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

/*
            <section class="section-movie">
                <img src="https://image.tmdb.org/t/p/w500/oZRlkaeMBwj6SByLNkBv8m8r6JU.jpg" movie-id="1">
                <img src="https://image.tmdb.org/t/p/w500/245tgZ3mTHWs0NRiPSwPjKobKHf.jpg" movie-id="2">
            </section>
*/

//Función para pintar las pelis en el DOM

const movieSection = (movieRender) => {
    return movieRender.map((movie) => {
        return `
                <img src=https://image.tmdb.org/t/p/w500/${movie.poster_path} movie-id=${movie.id}/>
            `;
    });
};


const createMovie = (movieRender) => {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
        <section class="section-movie">
            ${movieSection(movieRender)}
        </section>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}

//Función onclick

buttonElement.onclick = e => {
    e.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            // data.results []
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
    console.log('Value: ', value);
};