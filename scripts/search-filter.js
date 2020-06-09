import { ToLatin } from './formating-text.js';
import { audioArray, PauseAll } from './generating-dom.js';

let searchInput = document.getElementsByClassName("search-input")[0];
let searchEmpty = document.getElementsByClassName("no-search")[0];

export function SearchSetup() {
    searchEmpty.style.display = "none";
    searchInput.addEventListener("input", Filtering);
}

function Filtering() {
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
    searchEmpty.style.display = removedElements === audioArray.length ? "flex" : "none";
}
