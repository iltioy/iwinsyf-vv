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

export const scene1: sceneItemType[] = [
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
    // {
    //     text: "YOU",
    //     duration: 400,
    // },
    // {
    //     text: "IN",
    //     duration: 400,
    // },
    // {
    //     text: "MY MIND",
    //     duration: 1900,
    // },
    {
        text: "",
        duration: 2700,
        variant: {
            textLevel: textLevels.high,
            textDirection: "column",
            types: [variants.addingText],
            wrappers: [],
            addingText: [
                {
                    text: "YOU ",
                    textLevel: textLevels.high,
                    timeToWait: 0,
                },
                {
                    text: "IN ",
                    textLevel: textLevels.high,
                    timeToWait: 600,
                },
                {
                    text: "MY MIND",
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
        duration: 400,
    },
    {
        text: "BUT YOU'RE",
        duration: 700,
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
        duration: 800,
    },
    {
        text: "MY HEAD",
        duration: 1900,
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
        duration: 900,
    },
    {
        text: "OR",
        duration: 200,
    },
    {
        text: "FELL",
        duration: 300,
    },
    {
        text: "THE BREATH",
        duration: 550,
    },
    {
        text: "YOU'LL TAKE",
        duration: 600,
    },
    {
        text: "BUT",
        duration: 350,
    },
    {
        text: "FATE",
        duration: 400,
    },
    {
        text: "WON'T",
        duration: 400,
    },
    {
        text: "LET",
        duration: 400,
    },
    {
        text: "ME",
        duration: 400,
    },
];
