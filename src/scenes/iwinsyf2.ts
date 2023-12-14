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
    textLevel: textLevels;
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

export const testScene: sceneItemType[] = [
    {
        duration: 1000,
        text: "ARE",
        variant: {
            types: [variants.furcation],
            addingText: [],
            textDirection: "row",
            textLevel: textLevels.large,
            wrappers: [],
            frucration: {
                delayTime: 50,
                timesToIterate: 12,
                textShadow: true,
                reverse: false,
                near: 5,
                percanrageDifference: 20,
            },
        },
    },
];

export const scene2: sceneItemType[] = [
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
        duration: 500,
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
        duration: 600,
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
        text: "",
        duration: 2700,
        variant: {
            textLevel: textLevels.high,
            textDirection: "column",
            types: [variants.addingText],
            wrappers: [
                {
                    name: "row1",
                    flex: "row",
                },
                {
                    name: "row2",
                    flex: "row",
                },
            ],
            addingText: [
                {
                    text: "YOU ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "IN",
                    textLevel: textLevels.high,
                    timeToWait: 600,
                    wrapper: "row1",
                },
                {
                    wrapper: "row2",
                    text: "MY ",
                    textLevel: textLevels.high,
                    timeToWait: 400,
                },
                {
                    wrapper: "row2",
                    text: "MIND ",
                    textLevel: textLevels.high,
                    timeToWait: 500,
                },
            ],
        },
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
    // {
    //     text: "MY MEMORIES",
    //     duration: 700,
    // },
    // {
    //     text: "AND",
    //     duration: 300,
    // },
    // {
    //     text: "ALL",
    //     duration: 400,
    // },

    {
        text: "",
        duration: 1400,
        variant: {
            textLevel: textLevels.high,
            textDirection: "column",
            types: [variants.addingText],
            wrappers: [],
            addingText: [
                {
                    text: "MY MEMORIES ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                },
                {
                    text: "AND ALL",
                    textLevel: textLevels.high,
                    timeToWait: 600,
                },
            ],
        },
    },
    // {
    //     text: "BUT YOU'RE",
    //     duration: 700,
    // },
    // {
    //     text: "NOT TANGIBLE",
    //     duration: 1700,
    // },
    {
        text: "",
        duration: 2400,
        variant: {
            textLevel: textLevels.high,
            textDirection: "column",
            types: [variants.addingText],
            wrappers: [
                {
                    flex: "row",
                    name: "row1",
                },
                {
                    flex: "row",
                    name: "row2",
                },
            ],
            addingText: [
                {
                    text: "BUT ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "YOU'RE ",
                    textLevel: textLevels.high,
                    timeToWait: 300,
                    wrapper: "row1",
                },
                {
                    text: "NOT ",
                    textLevel: textLevels.high,
                    timeToWait: 400,
                    wrapper: "row2",
                },
                {
                    text: "TANGIBLE",
                    textLevel: textLevels.high,
                    timeToWait: 500,
                    wrapper: "row2",
                },
            ],
        },
    },
    // {
    //     text: "STUCK",
    //     duration: 400,
    // },
    // {
    //     text: "ON SENTIMENTAL",
    //     duration: 2700,
    // },
    {
        text: "",
        duration: 3100,
        variant: {
            textLevel: textLevels.high,
            textDirection: "column",
            types: [variants.addingText],
            wrappers: [
                {
                    flex: "row",
                    name: "row1",
                },
                {
                    flex: "row",
                    name: "row1",
                },
            ],
            addingText: [
                {
                    text: "STUCK ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "ON ",
                    textLevel: textLevels.high,
                    timeToWait: 400,
                    wrapper: "row1",
                },
                {
                    text: "SENTIMENTAL",
                    textLevel: textLevels.high,
                    timeToWait: 600,
                },
            ],
        },
    },
    // {
    //     text: "THE HISTORY",
    //     duration: 500,
    // },
    // {
    //     text: "WE NEVER HAD",
    //     duration: 2600,
    // },
    {
        text: "",
        duration: 3100,
        variant: {
            textLevel: textLevels.high,
            textDirection: "column",
            types: [variants.addingText],
            wrappers: [],
            addingText: [
                {
                    text: "THE HISTORY ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                },
                {
                    text: "WE NEVER ",
                    textLevel: textLevels.high,
                    timeToWait: 700,
                },
                {
                    text: "HAD",
                    textLevel: textLevels.high,
                    timeToWait: 800,
                    spread: {
                        index: 1,
                        count: 3,
                        timePerLetter: 70,
                        delay: 0,
                    },
                },
            ],
        },
    },
    // {
    //     text: "ALMOST",
    //     duration: 400,
    // },
    // {
    //     text: "ACCIDENTAL",
    //     duration: 2300,
    // },

    {
        text: "",
        duration: 2900,
        variant: {
            textLevel: textLevels.high,
            textDirection: "row",
            types: [variants.addingText],
            wrappers: [],
            addingText: [
                {
                    text: "ALMOST ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                },
                {
                    text: "ACCIDENTAL ",
                    textLevel: textLevels.high,
                    timeToWait: 700,
                    // spread: {
                    //     count: 3,
                    //     index: 8,
                    //     timePerLetter: 70,
                    //     delay: 900,
                    // },
                },
            ],
        },
    },
    {
        text: "THE WAY",
        duration: 600,
    },
    {
        text: "YOU LIVE",
        duration: 600,
    },
    {
        text: "INSIDE",
        duration: 750,
    },
    {
        text: "MY HEAD",
        duration: 1730,
        // variant: {
        //     textDirection: "row",
        //     textLevel: textLevels.high,
        //     types: [variants.addingText],
        //     wrappers: [],
        //     addingText: [
        //         {
        //             text: "MY HEAD",
        //             textLevel: textLevels.high,
        //             timeToWait: 0,
        //             spread: {
        //                 count: 5,
        //                 index: 5,
        //                 timePerLetter: 20,
        //             },
        //         },
        //     ],
        // },
    },
    {
        text: "I",
        duration: 200,
    },
    {
        text: "WOULD",
        duration: 200,
    },
    {
        text: "KILL",
        duration: 200,
    },
    {
        text: "TO BE",
        duration: 200,
    },
    {
        text: "A MILE",
        duration: 600,
    },
    {
        text: "AWAY",
        duration: 700,
    },
    {
        text: "OR",
        duration: 200,
    },
    {
        text: "FELL",
        duration: 200,
    },
    {
        text: "THE BREATH",
        duration: 400,
    },
    {
        text: "YOU'LL TAKE",
        duration: 650,
    },
    {
        text: "BUT",
        duration: 450,
    },
    {
        text: "",
        duration: 1600,
        variant: {
            textLevel: textLevels.high,
            textDirection: "row",
            types: [variants.addingText],
            wrappers: [],
            addingText: [
                {
                    text: "FATE ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                },
                {
                    text: "WON'T ",
                    textLevel: textLevels.high,
                    timeToWait: 400,
                },
                {
                    text: "LET ",
                    textLevel: textLevels.high,
                    timeToWait: 400,
                },
                {
                    text: "ME",
                    textLevel: textLevels.high,
                    timeToWait: 400,
                },
            ],
        },
    },
    // {
    //     duration: 1000,
    //     text: "ARE",
    //     variant: {
    //         types: [variants.furcation],
    //         addingText: [],
    //         textDirection: "row",
    //         textLevel: textLevels.large,
    //         wrappers: [],
    //         frucration: {
    //             delayTime: 50,
    //             timesToIterate: 12,
    //             textShadow: true,
    //             reverse: false,
    //             near: 5,
    //             percanrageDifference: 20,
    //         },
    //     },
    // },
];
