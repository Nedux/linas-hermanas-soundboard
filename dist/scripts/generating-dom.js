import { FormatingKeywords } from './formating-text.js';
export let audioArray = [];

let board = document.getElementsByClassName("sound-board")[0];

class AudioElement {
    constructor(button, audio, searchTags) {
        this.button = button;
        this.audio = audio;
        this.searchTags = searchTags;
    }
}

function PlayItem(audioElement) {
    return () => {
        audioArray.forEach(audioEl => {
            audioEl.audio.pause();
            audioEl.audio.currentTime = 0;
            audioEl.button.classList.remove("active");
        });
        audioElement.audio.play();
        audioElement.button.classList.add("active");
        setTimeout(() => {
            audioElement.button.classList.remove("active");
        }, audioElement.audio.duration * 1000);
    }
}

export function ButtonGeneration(buttonsData) {
    buttonsData.forEach((buttonData) => {
        let audio = document.createElement("audio");
        let src = document.createElement("source");
        src.setAttribute('src', "./sounds/" + buttonData.source);
        src.setAttribute('type', "audio/mpeg");
        audio.appendChild(src);

        let button = document.createElement("div");
        let text = document.createElement("p");
        text.innerHTML = buttonData.titleHtml;
        button.append(text);
        button.style.backgroundColor = buttonData.hexColor;

        let searchTags = FormatingKeywords(buttonData.titleHtml, buttonData.tags, buttonData.source);
        let audioElement = new AudioElement(button, audio, searchTags);
        audioArray.push(audioElement);
        button.addEventListener("click", PlayItem(audioElement));

        board.appendChild(audio);
        board.appendChild(button);
    });
}