import { FormatingKeywords } from './formating-text.js';
export let audioArray = [];

let board = document.getElementsByClassName("sound-board")[0];
let egg2Audio = document.getElementsByClassName("egg-2-audio")[0];
let egg3Audio = document.getElementsByClassName("egg-3-audio")[0];

class AudioElement {
    constructor(button, audio, searchTags) {
        this.button = button;
        this.audio = audio;
        this.searchTags = searchTags;
    }
}
export function PauseAll() {
    egg2Audio.pause();
    egg2Audio.currentTime = 0;
    egg3Audio.pause();
    egg3Audio.currentTime = 0;
    audioArray.forEach(audioEl => {
        audioEl.audio.pause();
        audioEl.audio.currentTime = 0;
        audioEl.button.classList.remove("active");
    });
}
function PlayItem(audioElement) {
    return () => {
        PauseAll();
        audioElement.audio.play();
        audioElement.button.classList.add("active");
        setTimeout(() => {
            audioElement.button.classList.remove("active");
        }, audioElement.audio.duration * 1000);
    }
}

export function ButtonGeneration(buttonsData) {
    buttonsData.forEach((buttonData, index) => {
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

        let searchTags = FormatingKeywords(buttonData.titleHtml, buttonData.tags, buttonData.source, index);
        let audioElement = new AudioElement(button, audio, searchTags);
        audioArray.push(audioElement);
        button.addEventListener("click", PlayItem(audioElement));

        board.appendChild(audio);
        board.appendChild(button);
    });
    let egg1 = document.getElementsByClassName("e-1")[0];
    const amerasAudioNumber = 9 - 1;
    egg1.addEventListener("click", PlayItem(audioArray[amerasAudioNumber]));

    let egg2 = document.getElementsByClassName("e-2")[0];
    egg2.addEventListener("click", () => {
        PauseAll();
        egg2Audio.play();
    });

    let egg3 = document.getElementsByClassName("e-3")[0];
    egg3.addEventListener("click", () => {
        PauseAll();
        egg3Audio.play();
    });
}