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
    low = "lowText",
    medium = "mediumText",
    high = "highText",
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
    delay: number;
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

    const { audioTime, sceneId } = getStartingId(25);
    audio.currentTime = audioTime;
    audio.play();

    changeScene(sceneId);
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
        let { text, wrapper, spread, textLevel } = variant.addingText[i];
        let wrapperElement = textWrapperElement;
        let initialText = text;

        if (wrapper) {
            wrapperElement = document.querySelector(`.${wrapper}`)!;
        }

        if (spread) {
            initialText = text.slice(0, spread.index);
        }

        wrapperElement.innerHTML += `
            <div class="text ${
                i !== 0 && "hiddenText"
            } ${textLevel}">${initialText}</div>
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
    const { timeToWait, spread, text } = variant.addingText[addingSceneId];
    const hiddenElements = document.getElementsByClassName("hiddenText");
    const firstElement = hiddenElements[0];
    if (!firstElement) return;

    setTimeout(() => {
        console.log(firstElement);
        firstElement.classList.remove("hiddenText");

        if (spread) {
            spreadLetter(firstElement, spread, spread.index, text, 1);
        }

        changeAddingScene(addingSceneId + 1, variant);
    }, timeToWait);
};

const spreadLetter = (
    element: Element,
    spread: spreadLetter,
    spreadingIndex: number,
    text: string,
    numSpreaded = 0
) => {
    let delay = spread.timePerLetter;

    if (numSpreaded === 0 || numSpreaded === 1) {
        delay += spread.delay;
    }

    setTimeout(() => {
        if (!text[spreadingIndex]) return;
        element.innerHTML += text[spreadingIndex];

        if (numSpreaded < spread.count) {
            spreadLetter(element, spread, spread.index, text, numSpreaded + 1);
        }
        if (numSpreaded >= spread.count) {
            if (spreadingIndex + 1 > text.length) return;
            spreadLetter(
                element,
                spread,
                spreadingIndex + 1,
                text,
                numSpreaded + 1
            );
        }
    }, delay);
};
