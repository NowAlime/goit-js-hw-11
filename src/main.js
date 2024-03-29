import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";

const input = document.querySelector("input");
const form = document.querySelector("form");
const loader = document.querySelector('.loader');
const galleryList = document.querySelector("ul.gallery");

form.addEventListener("submit",submitHandle);

function submitHandle (event)  {
    event.preventDefault();
    galleryList.innerHTML = "";
    const valueInput = input.value.trim();

    
    if (valueInput  === "") {
     
      loader.classList.add('is-hidden');
        iziToast.error({
            color: 'yellow',
            message: ` Please fill in the field for search`,
            position: 'topRight',
        });
  
        
    }   
    if (valueInput ) {
      loader.classList.remove('is-hidden');
        fetchImages(valueInput)
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
   
};
