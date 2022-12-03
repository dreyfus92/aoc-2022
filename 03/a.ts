import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);

const lines = input.split("\n");

const letterToNumber = (letter: string) => {
    const alphabetLowerCaseandUpperCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabetLowerCaseandUpperCase.indexOf(letter) + 1;
};

function splitAnStringInHalves(str: string) {
    const middle = Math.ceil(str.length / 2);
    return [str.slice(0, middle), str.slice(middle)];
}

function getDuplicates(str: string) {
    const [firstHalf, secondHalf] = splitAnStringInHalves(str);
    const firstHalfArray = firstHalf.split("");
    const secondHalfArray = secondHalf.split("");
    const duplicates = firstHalfArray.filter((letter) => secondHalfArray.includes(letter));
    return duplicates;
}

let totalSum = 0
for (const line of lines) {
    const duplicate = getDuplicates(line);
    const number = letterToNumber(duplicate[0])
    totalSum += number
}

console.log(totalSum)


