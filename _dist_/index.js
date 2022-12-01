import {registerImage} from './lazy.js';

//! API URL
const API_FOX = 'https://randomfox.ca/floof/';

//! NODOS
const IMAGES_CONTAINER = document.getElementById('images');
const BTN_ADD_IMAGE = document.getElementById('btnAddImage');

//! Funcion Fetch
const addImage = async () => {
    const data = await fetch(API_FOX);
    const json = await data.json();
    
    const image = document.createElement('img');
    image.classList = 'mx-auto';
    image.dataset.src = json.image;
    image.width = "320";
    image.alt = "";

    const imageContainer = document.createElement('div');
    imageContainer.classList = 'p-4 mx-auto bg-gray-300';
    imageContainer.style.maxWidth = "320px";
    imageContainer.style.maxWidth = "320px";

    imageContainer.appendChild(image);
    IMAGES_CONTAINER.appendChild(imageContainer);
    registerImage(imageContainer);
}

//! Evento Click al Btn
BTN_ADD_IMAGE.addEventListener('click', addImage);