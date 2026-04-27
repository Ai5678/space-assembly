import {words} from "./words"

function getRandomIndex(arr: string[]): number{
    return Math.floor(Math.random() * arr.length);
}

export function getRandomWord(): string {
    return words[getRandomIndex(words)];
}
export function getFarewellText(letter: string): string{
    const options: string[] = [
        `Farewell, ${letter}`,
        `Adios, ${letter}`,
        `R.I.P., ${letter}`,
        `We'll miss you, ${letter}`,
        `Oh no, not ${letter}!`,
        `${letter} bites the dust`,
        `Gone but not forgotten, ${letter}`,
        `The end of ${letter} as we know it`,
        `Off into the sunset, ${letter}`,
        `${letter}, it's been real`,
        `${letter}, your watch has ended`,
        `${letter} has left the building`
    ];

    return options[getRandomIndex(options)];
}