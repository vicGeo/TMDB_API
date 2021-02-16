//Seleccionamos elementos del DOM
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

//Funcion onclick

buttonElement.onclick = e => {
    e.preventDefault();
    const value = inputElement.value;
    console.log('Value: ', value);
};