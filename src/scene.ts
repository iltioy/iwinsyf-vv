import iwinsyf_audio from "./audio/setitoff.mp3";
import { scene4 as scene } from "./scenes";

// anim

// const anDiv = document.querySelector(".animate")

// const arr = [
//   {
//     color: "white",
//     time: 100
//   },
//    {
//     color: "black",
//     time: 100
//   },
//    {
//     color: "white",
//     time: 100
//   },
//      {
//     color: "black",
//     time: 100
//   },
//    {
//     color: "white",
//     time: 100
//   },
//    {
//     color: "black",
//     time: 440
//   },
// ]

// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// const startAnim = async () => {
//     let i = 0;

//     while (i !== 200) {
//       if (arr[i%arr.length].color === "black") {
//         anDiv.classList.add("black")
//         anDiv.classList.remove("white")
//       } else {
//         anDiv.classList.remove("black")
//         anDiv.classList.add("white")
//       }
//       await timeout(arr[i%arr.length].time);

//       i++;
//       console.log(i)
//     }
// }

// console.log("hahahhahahhaha")

// startAnim();

interface sceneItemType {
    text: string;
    duration: number;
    textLevel?: textLevels;
    variant?: variant;
}

interface variant {
    types: variants[];
    textDirection: "row" | "column";
    addingText: addingTextItem[];
    wrappers: wrapper[];
    frucration?: frucration;
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
    large = "largeText",
    extraLarge = "extraLargeText",
}

interface addingTextItem {
    text: string;
    timeToWait: number;
    textLevel?: textLevels;
    wrapper?: string;
    spread?: spreadLetter;
}

interface wrapper {
    name: string;
    flex: "row" | "column";
}

interface spreadLetter {
    index: number;
    count: number;
    timePerLetter: number;
    delay: number;
}

interface frucration {
    timesToIterate: number;
    delayTime: number;
    textShadow: boolean;
    reverse: boolean;
    near: number;
    percanrageDifference: number;
}
let sceneElement = document.querySelector(".scene")!;
let textSceneElement = document.querySelector(".text")!;
let furcationElement = document.querySelector(".furcation")!;
let textWrapperElement = document.querySelector(".textWrapper")!;

const audio = new Audio(iwinsyf_audio);

let isScenePlaying = false;

export const setupScene = () => {
    sceneElement = document.querySelector(".scene")!;
    textSceneElement = document.querySelector(".text")!;
    textWrapperElement = document.querySelector(".textWrapper")!;
    furcationElement = document.querySelector(".furcation")!;

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
    furcationElement = document.querySelector(".furcation")!;

    const { audioTime, sceneId } = getStartingId(0);
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

    textWrapperElement.classList.remove("disabled");
    textWrapperElement.classList.remove("column");
    textWrapperElement.classList.add("row");
    furcationElement.classList.add("disabled");

    textWrapperElement.innerHTML = `<div class="${sceneItem.textLevel}">${sceneItem.text}</div>`;
    handleFurcation(sceneItem, 0);
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

    const { variant, textLevel } = sceneItem;

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
        let { text, wrapper, spread } = variant.addingText[i];
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

        console.log({ spread });
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
    console.log(spread);
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

const handleFurcation = (sceneItem: sceneItemType, iteration = 0) => {
    const { variant, text } = sceneItem;
    if (!variant) return;

    const { frucration, types } = variant;

    if (!frucration || !types.includes(variants.furcation)) return;
    const { delayTime, timesToIterate, percanrageDifference } = frucration;
    let delay = iteration === 0 ? 0 : delayTime;

    if (timesToIterate === iteration - 1) return;

    console.log("fruc!");
    setTimeout(() => {
        textWrapperElement.classList.add("disabled");
        furcationElement.classList.remove("disabled");

        let percanrage = (100 / timesToIterate) * iteration;
        let classes = "frucrationItem ";

        if (frucration.textShadow) {
            classes += " furcationShadow ";
        }

        classes += sceneItem?.textLevel;

        if (frucration.reverse) {
            console.log(100 - percanrage);
            furcationElement.innerHTML += `
            <div class="${classes}" 
                style="left: ${100 - percanrage}%; 
                top: ${percanrage}%; 
                transform: translate(-${100 - percanrage}%, -${percanrage}%)";>
                ${text}
            </div>
        `;
        } else {
            furcationElement.innerHTML += `
            <div class="${classes}" style="
                left: ${percanrage}%; top: ${percanrage}%; 
                transform: translate(-${percanrage}%, -${percanrage}%); 
                 ">
                ${text}
            </div>`;

            for (let i = 1; i <= frucration.near; i++) {
                furcationElement.innerHTML += `
                <div class="${classes}" style="
                    left: ${
                        percanrage + percanrageDifference * i
                    }%; top: ${percanrage}%; 
                    transform: translate(-${
                        percanrage + percanrageDifference * i
                    }%, -${percanrage}%); 
                     ">
                    ${text}
                </div>`;

                furcationElement.innerHTML += `
                <div class="${classes}" style="
                    left: ${
                        percanrage - percanrageDifference * i
                    }%; top: ${percanrage}%; 
                    transform: translate(-${
                        percanrage - percanrageDifference * i
                    }%, -${percanrage}%); 
                     ">
                    ${text}
                </div>`;
            }
        }

        // near

        // furcationElement.innerHTML += `
        //         <div class=" ${
        //             sceneItem.variant?.textLevel
        //         }" style="position:absolute; left: ${
        //     percanrage + 15
        // }%; top: ${percanrage}%; transform: translate(-${
        //     percanrage + 15
        // }%, -${percanrage}%);
        //     text-shadow: 10px 15px ${5}px #cccccc;
        //     ">${text}</div>
        //     `;

        // furcationElement.innerHTML += `
        //     <div class=" ${
        //         sceneItem.variant?.textLevel
        //     }" style="position:absolute; left: ${
        //     percanrage - 15
        // }%; top: ${percanrage}%; transform: translate(-${
        //     percanrage - 15
        // }%, -${percanrage}%);
        // text-shadow: 10px 15px ${5}px #cccccc;
        // ">${text}</div>
        // `;

        // reverse

        handleFurcation(sceneItem, iteration + 1);
    }, delay);
};
