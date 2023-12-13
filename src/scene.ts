import iwinsyf_audio from "./audio/setitoff.mp3";

interface sceneItemType {
    text: string;
    duration: number;
    variant?: string;
}

interface variant {
    types: variantTypes[];
    textLevel: textLevelsTypes;
    addingText?: [];
}

enum variantTypes {
    plain,
    addingText,
    furcation,
}

enum textLevelsTypes {
    low,
    medium,
    high,
}

interface addingTextItem {
    text: string;
    duration: number;
    textLevel: textLevelsTypes;
}

export const scene: sceneItemType[] = [
    {
        text: "",
        duration: 0,
    },
    {
        text: "I WISH",
        duration: 400,
    },
    {
        text: "I NEVER",
        duration: 300,
    },
    {
        text: "SAW",
        duration: 300,
    },
    {
        text: "YOUR",
        duration: 300,
    },
    {
        text: "FACE",
        duration: 700,
    },
    {
        text: "THEN",
        duration: 300,
    },
    {
        text: "I WOULDN'T",
        duration: 400,
    },
    {
        text: "NEED",
        duration: 300,
    },
    {
        text: "A PLACE",
        duration: 700,
    },
    {
        text: "TO FRAME",
        duration: 400,
    },
    {
        text: "YOU",
        duration: 400,
    },
    {
        text: "IN",
        duration: 400,
    },
    {
        text: "MY MIND",
        duration: 1900,
    },
    {
        text: "HANGING",
        duration: 400,
    },
    {
        text: "ON",
        duration: 300,
    },
    {
        text: "THE",
        duration: 300,
    },
    {
        text: "WALL",
        duration: 500,
    },
    {
        text: "MY MEMORIES",
        duration: 700,
    },
    {
        text: "AND",
        duration: 300,
    },
    {
        text: "ALL",
        duration: 300,
    },
    {
        text: "BUT YOU'RE",
        duration: 800,
    },
    {
        text: "NOT TANGIBLE",
        duration: 1700,
    },
    {
        text: "STUCK",
        duration: 400,
    },
    {
        text: "ON SENTIMENTAL",
        duration: 2700,
    },
    {
        text: "THE HISTORY",
        duration: 500,
    },
    {
        text: "WE NEVER HAD",
        duration: 2600,
    },
    {
        text: "ALMOST",
        duration: 400,
    },
    {
        text: "ACCIDENTAL",
        duration: 2300,
    },
    {
        text: "THE WAY",
        duration: 500,
    },
    {
        text: "YOU LIVE",
        duration: 500,
    },
    {
        text: "INSIDE",
        duration: 600,
    },
    {
        text: "MY HEAD",
        duration: 1900,
    },
    {
        text: "I WOULD",
        duration: 300,
    },
    {
        text: "KILL",
        duration: 300,
    },
    {
        text: "TO BE",
        duration: 300,
    },
    {
        text: "A MILE AWAY",
        duration: 300,
    },
    {
        text: "OR FELL",
        duration: 300,
    },
    {
        text: "THE BREATH",
        duration: 300,
    },
    {
        text: "YOU TAKE",
        duration: 300,
    },
    {
        text: "BUT",
        duration: 300,
    },
    {
        text: "FATE",
        duration: 300,
    },
    {
        text: "WON'T",
        duration: 300,
    },
    {
        text: "LET",
        duration: 300,
    },
    {
        text: "ME",
        duration: 300,
    },
];

let sceneElement = document.querySelector(".scene")!;
let textSceneElement = document.querySelector(".text")!;

const audio = new Audio(iwinsyf_audio);

let isScenePlaying = false;

export const setupScene = () => {
    sceneElement = document.querySelector(".scene")!;

    sceneElement.addEventListener("click", () => {
        if (!isScenePlaying) {
            isScenePlaying = true;
            runScene();
        }
    });
};

const changeScene = (sceneItemId = 0) => {
    let sceneItem: sceneItemType = scene[sceneItemId];
    textSceneElement.innerHTML = sceneItem.text;
    setTimeout(() => {
        if (sceneItemId + 1 !== scene.length) {
            changeScene(sceneItemId + 1);
        }
    }, sceneItem.duration);
};

export const runScene = () => {
    sceneElement = document.querySelector(".scene")!;
    textSceneElement = document.querySelector(".text")!;

    console.log(audio);
    audio.play();

    changeScene(0);
};
