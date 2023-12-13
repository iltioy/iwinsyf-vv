import iwinsyf_audio from "./audio/setitoff.mp3";
import { scene2 as scene } from "./scenes";

interface sceneItemType {
    text: string;
    duration: number;
    variant?: variant;
}

interface variant {
    types: variants[];
    textLevel: textLevels;
    textDirection: "row" | "column";
    addingText: addingTextItem[];
    wrappers: wrapper[];
}

enum variants {
    plain,
    addingText,
    furcation,
}

enum textLevels {
    low,
    medium,
    high,
}

interface wrapper {
    name: string;
    flex: "row" | "column";
}

interface addingTextItem {
    text: string;
    timeToWait: number;
    textLevel: textLevels;
    wrapper?: string;
    spread?: spreadLetter;
}

interface spreadLetter {
    index: number;
    count: number;
    timePerLetter: number;
}

let sceneElement = document.querySelector(".scene")!;
let textSceneElement = document.querySelector(".text")!;
let textWrapperElement = document.querySelector(".textWrapper")!;

const audio = new Audio(iwinsyf_audio);

let isScenePlaying = false;

export const setupScene = () => {
    sceneElement = document.querySelector(".scene")!;
    textSceneElement = document.querySelector(".text")!;
    textWrapperElement = document.querySelector(".textWrapper")!;

    sceneElement.addEventListener("click", () => {
        if (!isScenePlaying) {
            isScenePlaying = true;
            runScene();
        }
    });
};

export const runScene = () => {
    sceneElement = document.querySelector(".scene")!;
    textSceneElement = document.querySelector(".text")!;

    const { audioTime, sceneId } = getStartingId(0);
    audio.currentTime = audioTime;
    audio.play();

    changeScene(sceneId);
};

const changeScene = (sceneItemId = 0) => {
    let sceneItem: sceneItemType = scene[sceneItemId];

    textWrapperElement.classList.remove("column");
    textWrapperElement.classList.add("row");

    textWrapperElement.innerHTML = sceneItem.text;
    handleAddingScene(sceneItem);

    setTimeout(() => {
        if (sceneItemId + 1 !== scene.length) {
            changeScene(sceneItemId + 1);
        }
    }, sceneItem.duration);
};

const getStartingId = (timeToSkip: number) => {
    let timeInMs = timeToSkip * 1000;
    let skippedTime = 0;
    let currId = 0;

    while (skippedTime < timeInMs) {
        skippedTime += scene[currId].duration;
        currId++;
    }

    return { sceneId: currId, audioTime: skippedTime / 1000 };
};

const handleAddingScene = (sceneItem: sceneItemType) => {
    if (!sceneItem.variant) return;
    if (!sceneItem.variant.types.includes(variants.addingText)) return;
    if (sceneItem.variant.addingText.length === 0) return;

    const { variant } = sceneItem;

    if (variant.textDirection == "column") {
        textWrapperElement.classList.remove("row");
        textWrapperElement.classList.add("column");
    }

    for (let i = 0; i < variant.wrappers.length; i++) {
        let { flex, name } = variant.wrappers[i];
        textWrapperElement.innerHTML += `
            <div class="${flex} ${name}"></div>
        `;
    }

    for (let i = 0; i < variant.addingText.length; i++) {
        let { text, wrapper } = variant.addingText[i];
        let wrapperElement = textWrapperElement;

        if (wrapper) {
            wrapperElement = document.querySelector(`.${wrapper}`)!;
        }

        wrapperElement.innerHTML += `
            <div class="text ${i !== 0 && "hiddenText"}">
                ${text}
            </div>
        `;
    }

    changeAddingScene(1, variant);
    // setTimeout(() => {
    //     textWrapperElement.innerHTML += `
    //         <div>${variant.addingText[0].text}</div>
    //     `;
    // }, variant.addingText[0].timeToWait);
};

const changeAddingScene = (addingSceneId = 0, variant: variant) => {
    if (addingSceneId + 1 > variant.addingText.length) return;

    // if (addingSceneId === 0) {
    //     changeAddingScene(1, variant);
    //     return;
    // }
    const { timeToWait } = variant.addingText[addingSceneId];
    const hiddenElements = document.getElementsByClassName("hiddenText");
    if (hiddenElements.length < 1) return;

    setTimeout(() => {
        hiddenElements[0].classList.remove("hiddenText");
        changeAddingScene(addingSceneId + 1, variant);
    }, timeToWait);
};
