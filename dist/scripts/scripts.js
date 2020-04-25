let allData = JSON.parse(`{
    "buttons": [
    {
        "title": "Žydų kilmės",
        "source": "zydu-kilme.mp3",
        "hexColor": "#965a66"
    },
    {
        "title": "Bled",
        "source": "blia.mp3",
        "hexColor": "#ff9277"
    },
    {
        "title": "Gražos neturi",
        "source": "grazos-neturi.mp3",
        "hexColor": "#3d856f"
    },
    {
        "title": "Santvarka",
        "source": "santvarka.mp3",
        "hexColor": "#BA8945"
    },
    {
        "title": "Kas per pinigai?",
        "source": "kas-per-pinigai.mp3",
        "hexColor": "#ecbc3c"
    },
    {
        "title": "Nkvd visi žydai",
        "source": "nkvdvisizydai.mp3",
        "hexColor": "#135859"
    },
    
    {
        "title": "Vežė neatvežė",
        "source": "veze-neatveze.mp3",
        "hexColor": "#9C9DA6"
    },
    {
        "title": "Žydų kilmė",
        "source": "zydu-kilme.mp3",
        "hexColor": "#AB4B5B"
    }
]
}`);
let audioArray = [];

function PlayItem(currentIndex) {
    // Optional pause
    audioArray.forEach(audio => {
        audio.pause();
    });
    audioArray[currentIndex].play();
}

let buttonsData = allData.buttons;
let board = document.getElementsByClassName("sound-board")[0];

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
    button.setAttribute("onClick", `PlayItem(${index})`);
    button.style.backgroundColor = buttonData.hexColor;
    board.appendChild(button);

});



