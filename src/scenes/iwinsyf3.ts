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

export const scene3: sceneItemType[] = [
    {
        text: "",
        duration: 0,
        textLevel: textLevels.high,
    },
    {
        text: "",
        duration: 2000, // 1500
        variant: {
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
                    text: "I ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "WISH",
                    timeToWait: 200,
                    wrapper: "row1",
                },
                {
                    text: "I ",
                    timeToWait: 150,
                    wrapper: "row1",
                },
                {
                    text: "NEVER",
                    timeToWait: 200,
                    wrapper: "row1",
                },
                {
                    text: "SAW ",
                    timeToWait: 300,
                    wrapper: "row2",
                },
                {
                    text: "YOUR",
                    timeToWait: 200,
                    wrapper: "row2",
                },
                {
                    text: "FACE",
                    timeToWait: 300,
                    wrapper: "row2",
                },
            ],
        },
    },

    // {
    //     text: "FACE",
    //     duration: 500,
    //     textLevel: textLevels.large,
    // },
    // {
    //     text: "THEN",
    //     duration: 300,
    // },
    // {
    //     text: "I WOULDN'T",
    //     duration: 400,
    // },
    // {
    //     text: "NEED",
    //     duration: 300,
    // },
    {
        text: "",
        duration: 1700, // 1500
        variant: {
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
                    text: "THEN ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "I ",
                    timeToWait: 200,
                    wrapper: "row1",
                },
                {
                    text: "WOULDN'T ",
                    timeToWait: 300,
                    wrapper: "row1",
                },
                {
                    text: "NEED ",
                    timeToWait: 200,
                    wrapper: "row2",
                },
                {
                    text: "A ",
                    timeToWait: 300,
                    wrapper: "row2",
                },
                {
                    text: "PLACE",
                    timeToWait: 300,
                    wrapper: "row2",
                },
            ],
        },
    },
    // {
    //     text: "PLACE",
    //     duration: 700,
    //     textLevel: textLevels.large,
    // },
    {
        text: "TO FRAME",
        duration: 400,
    },
    {
        text: "",
        duration: 2700,
        variant: {
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
        duration: 750,
    },
    {
        text: "BUT",
        duration: 500,
    },
    {
        text: "",
        duration: 1600,
        textLevel: textLevels.medium,
        variant: {
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
    // {
    //     text: "DISTANCE ",
    //     duration: 1000,
    // },
    // {
    //     text: "DISTURBS ME",
    //     duration: 1600,
    // },
    {
        text: "",
        duration: 2600,
        textLevel: textLevels.large,
        variant: {
            addingText: [
                {
                    text: "DISTANCE ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "DISTURBS ",
                    timeToWait: 1000,
                    wrapper: "row2",
                },
                {
                    text: "ME",
                    timeToWait: 700,
                    wrapper: "row2",
                },
            ],
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
        },
    },
    // {
    //     text: "NOW ",
    //     duration: 300,
    // },

    // {
    //     text: "I WISH ",
    //     duration: 400,
    // },
    // {
    //     text: "WE ",
    //     duration: 400,
    // },
    // {
    //     text: "NEVER ",
    //     duration: 800,
    // },
    // {
    //     text: "MET ",
    //     duration: 1350,
    // },
    {
        text: "",
        duration: 3250,
        textLevel: textLevels.high,
        variant: {
            addingText: [
                {
                    text: "NOW ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "I WISH ",
                    timeToWait: 300,
                    wrapper: "row1",
                },
                {
                    text: "WE ",
                    timeToWait: 400,
                    wrapper: "row2",
                },
                {
                    text: "NEVER ",
                    timeToWait: 400,
                    wrapper: "row2",
                },
                {
                    text: "MET",
                    timeToWait: 700,
                    wrapper: "row2",
                },
            ],
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
        },
    },
    // {
    //     text: "I ",
    //     duration: 300,
    // },
    // {
    //     text: "WISH ",
    //     duration: 400,
    // },
    // {
    //     text: "I ",
    //     duration: 300,
    // },
    // {
    //     text: "COULD ",
    //     duration: 400,
    // },
    // {
    //     text: "FORGET ",
    //     duration: 800,
    // },
    {
        text: "",
        duration: 2200,
        textLevel: textLevels.high,
        variant: {
            addingText: [
                {
                    text: "I ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "WISH ",
                    timeToWait: 300,
                    wrapper: "row1",
                },
                {
                    text: "I ",
                    timeToWait: 400,
                    wrapper: "row2",
                },
                {
                    text: "COULD ",
                    timeToWait: 300,
                    wrapper: "row2",
                },
                {
                    text: "FORGET",
                    timeToWait: 400,
                    wrapper: "row2",
                },
            ],
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
        },
    },
    {
        text: "WHO ",
        duration: 470,
    },
    {
        text: "YOU ",
        duration: 500,
    },

    // "ARE"

    // first version
    {
        text: "",
        duration: 3100,
        variant: {
            addingText: [
                {
                    text: "",
                    timeToWait: 0,
                },
                {
                    text: "ARE",
                    timeToWait: 0,
                    spread: {
                        count: 5,
                        delay: 0,
                        index: 2,
                        timePerLetter: 75,
                    },
                },
            ],
            textDirection: "row",
            types: [variants.addingText],
            wrappers: [],
        },
    },

    // second version
    // single frame *start
    // {
    //     duration: 700,
    //     text: "ARE",
    //     textLevel: textLevels.large,
    //     variant: {
    //         types: [variants.furcation],
    //         addingText: [],
    //         textDirection: "row",
    //         wrappers: [],
    //         frucration: {
    //             delayTime: 40,
    //             timesToIterate: 13,
    //             textShadow: true,
    //             reverse: false,
    //             near: 1,
    //             percanrageDifference: 25,
    //         },
    //     },
    // },
    // {
    //     duration: 2600,
    //     text: "",
    // },
    // single frame *end

    // {
    //     text: "DISTANCE ",
    //     duration: 1000,
    // },
    // {
    //     text: "DISTURBS ME",
    //     duration: 1800,
    // },

    {
        text: "",
        duration: 2800,
        textLevel: textLevels.high,
        variant: {
            addingText: [
                {
                    text: "DISTANCE ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "DISTURBS ",
                    timeToWait: 1000,
                    wrapper: "row2",
                },
                {
                    text: "ME",
                    timeToWait: 650,
                    wrapper: "row2",
                },
            ],
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
        },
    },
    // {
    //     text: "CAUSE ",
    //     duration: 400,
    // },
    // {
    //     text: "WE ",
    //     duration: 350,
    // },
    // {
    //     text: "JUST ",
    //     duration: 300,
    // },
    // {
    //     text: "CAN'T ",
    //     duration: 400,
    // },
    // {
    //     text: "CONNECT ",
    //     duration: 1800,
    // },
    {
        text: "",
        duration: 3250,
        textLevel: textLevels.high,
        variant: {
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
                    text: "CAUSE ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "WE ",
                    timeToWait: 400,
                    wrapper: "row1",
                },
                {
                    text: "JUST ",
                    timeToWait: 350,
                    wrapper: "row1",
                },
                {
                    text: "CAN'T ",
                    timeToWait: 300,
                    wrapper: "row2",
                },
                {
                    text: "CONNECT",
                    timeToWait: 400,
                    wrapper: "row2",
                },
            ],
            textDirection: "column",
            types: [variants.addingText],
        },
    },
    // {
    //     text: "I ",
    //     duration: 200,
    // },
    // {
    //     text: "FOUND ",
    //     duration: 400,
    // },
    // {
    //     text: "MY ",
    //     duration: 300,
    // },
    // {
    //     text: "ONE ",
    //     duration: 300,
    // },
    // {
    //     text: "REGRET ",
    //     duration: 850,
    // },
    {
        text: "",
        duration: 2050,
        textLevel: textLevels.high,
        variant: {
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
                    text: "I ",
                    timeToWait: 0,
                    wrapper: "row1",
                },
                {
                    text: "FOUND ",
                    timeToWait: 200,
                    wrapper: "row1",
                },
                {
                    text: "MY ",
                    timeToWait: 400,
                    wrapper: "row1",
                },
                {
                    text: "ONE ",
                    timeToWait: 300,
                    wrapper: "row2",
                },
                {
                    text: "REGRET",
                    timeToWait: 300,
                    wrapper: "row2",
                },
            ],
            textDirection: "column",
            types: [variants.addingText],
        },
    },
    {
        text: "AND ",
        duration: 300,
    },
    {
        text: "IT ",
        duration: 300,
    },
    {
        text: "WAS ",
        duration: 300,
    },
    // {
    //     text: "YOU ",
    //     duration: 1400,
    // },
    {
        duration: 1400,
        text: "YOU",
        textLevel: textLevels.high,
        variant: {
            types: [variants.furcation],
            addingText: [],
            textDirection: "row",
            wrappers: [],
            frucration: {
                delayTime: 35,
                timesToIterate: 15,
                textShadow: true,
                reverse: false,
                near: 5,
                percanrageDifference: 20,
            },
        },
    },
    {
        text: "DISTANCE ",
        duration: 700,
    },
    {
        text: "DISTURBS ME",
        duration: 700,
    },
];
