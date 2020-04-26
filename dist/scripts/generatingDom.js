let audioArray = [];
let board = document.getElementsByClassName("sound-board")[0];

function PlayItem(currentIndex) {
    return () => {
        audioArray.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        audioArray[currentIndex].play();
    }
}

export function ButtonGeneration(buttonsData) {
    buttonsData.forEach((buttonData, index) => {
        let audio = document.createElement("audio");
        audioArray.push(audio);
        board.appendChild(audio);

        let src = document.createElement("source");
        src.setAttribute('src', "./sounds/" + buttonData.source);
        src.setAttribute('type', "audio/mpeg");
        audio.appendChild(src);

        let button = document.createElement("div");
        let text = document.createElement("p");
        text.append(document.createTextNode(buttonData.title));
        button.append(text);
        button.addEventListener("click", PlayItem(index));
        button.style.backgroundColor = buttonData.hexColor;
        board.appendChild(button);

    });
}