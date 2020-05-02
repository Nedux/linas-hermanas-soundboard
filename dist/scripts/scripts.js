import { dataFetch } from './dataFetch.js';
import { ButtonGeneration, audioArray, PauseAll } from './generating-dom.js';
import { ToLatin } from './formating-text.js';

dataFetch()
    .then((resp) => {
        ButtonGeneration(resp.buttons);
    })
    .catch((e) => {
        console.log(`This went wrong: ${e}`)
    });

// Search
let searchInput = document.getElementsByClassName("search-input")[0];
let searchEmpty = document.getElementsByClassName("no-search")[0];
searchEmpty.style.display = "none";
searchInput.addEventListener("input", filtering);
function filtering() {
    PauseAll();
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
    if (removedElements === audioArray.length) {
        searchEmpty.style.display = "flex";
    }
    else {
        searchEmpty.style.display = "none";
    }
}








