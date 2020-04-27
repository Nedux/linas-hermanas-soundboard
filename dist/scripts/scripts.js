import { dataFetch } from './dataFetch.js';
import { ButtonGeneration, audioArray } from './generating-dom.js';
import { ToLatin } from './formating-text.js';

dataFetch()
    .then((resp) => {
        ButtonGeneration(resp.buttons);
    })
    .catch((e) => {
        console.log(`This went wrong: ${e}`)
    });

let searchInput = document.getElementsByClassName("search-input")[0];
searchInput.addEventListener("input", filtering);

function filtering() {
    let removedElements = 0;
    audioArray.forEach(({ button, audio, searchTags }) => {
        let searchKey = ToLatin(searchInput.value.toLowerCase());
        if (!searchTags.includes(searchKey) && searchInput.value) {
            removedElements++;
            button.style.display = "none";
        }
        else {
            button.style.display = "flex";
        }
    })
    console.log(`All elements removed? ${removedElements === audioArray.length}`)
}








