//Claves de la API TMDB
const API_KEY = 'ed8717a7e8e8309c83f2ad4db5fbb610';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=ed8717a7e8e8309c83f2ad4db5fbb610&language=es-ES';


//Seleccionamos elementos del DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

//Funcion onclick

buttonElement.onclick = e => {
    e.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data: ', data);
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
    console.log('Value: ', value);
};