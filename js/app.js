//Seleccionamos elementos del DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const buttonIdElement = document.querySelector('#searchId');
const inputIdElement = document.querySelector('#inputValueId');
const movieSearchable = document.querySelector('#movie-searchable');

const url = 'https://api.themoviedb.org/3/search/movie?api_key=ed8717a7e8e8309c83f2ad4db5fbb610&language=es-ES';


const getMovieHtml = movie => {
    return `<div class="section-movie">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            </div>
            `
};

const renderMovies = movies => {
    document.querySelector('#movie-searchable').innerHTML = '';
    //Recorremos el array de pelis de la API
    for (const movie of movies) {
        document.querySelector('#movie-searchable').innerHTML += getMovieHtml(movie);
    }
};

const renderMoviesId = movies => {
    document.querySelector('#movie-searchable').innerHTML = '';
    document.querySelector('#movie-searchable').innerHTML+=
    `<div class="section-movie">
        <img src="https://image.tmdb.org/t/p/w500${movies.poster_path}">
        <p>${movies.overview}</p>
    </div>`
}

//Función onclick nombre peliculas

buttonElement.onclick = e => {
    e.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then(res => {
            const movies = res.results;
            renderMovies(movies);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });

    inputElement.value = '';
    console.log('Value: ', value);
};

//Función onclick ID

buttonIdElement.onclick = e => {
    e.preventDefault();
    const id = inputIdElement.value;

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ed8717a7e8e8309c83f2ad4db5fbb610&language=es-ES`)
        .then((res) => res.json())
        .then(data => {
            const movies = data;
            renderMoviesId(movies);
        })

    inputIdElement.value = '';
}


// const getMovieDetailed = movie_id => {
//     axios.get(`http://api.themoviedb.org/3/movie/${movie_id}?api_key=ed8717a7e8e8309c83f2ad4db5fbb610&language=es-ES`)
//         .then(res => {
//             const movie = res.data;
//             document.querySelector('#swiper-wrapper').innerHTML += getMovieDetailedHtml(movie);
//         })
//         .catch(console.error);
// };

// const getMovieDetailedHtml = movie => {
//     return `<div class="swiper-slide">
//                 <img src="http://image.tmdb.org/t/p/w500${movie.poster_path}">
//                 <span>${movie.popularity}</span>
//                 <p>${movie.overview}</p>
//             </div>
//             `
// };