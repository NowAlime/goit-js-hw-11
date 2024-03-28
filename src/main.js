
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import { feImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";



const galleryList = document.querySelector(".gallery");
let query='';
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    query = input.value.trim();
   if (query) {
    galleryList.innerHTML = '<div class="loader"></div>';
        feImages(query)
            .then(data => renderImages(data.hits))
            .catch(error => {
                console.log(error);
                iziToast.error({
                    title: 'Error',
                    message: `❌ Sorry, there are no images matching your search query. Please, try again!`,
                    position: 'topRight',
                })
            })
           
    }
    galleryList.innerHTML = "";
});