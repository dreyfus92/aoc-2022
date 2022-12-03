import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);

const lines = input.split("\n");

const letterToNumber = (letter: string) => {
    const alphabetLowerCaseandUpperCase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabetLowerCaseandUpperCase.indexOf(letter) + 1;
};

const groupLinesInGroupsOf3 = (lines: string[]) => {
    const groups = [];
    for (let i = 0; i < lines.length; i += 3) {
        groups.push(lines.slice(i, i + 3));
    }
    return groups;
}

function getTriplicateInGroupOf3(group: string[]) {
    const [firstLine, secondLine, thirdLine] = group;
    const firstLineArray = firstLine.split("");
    const secondLineArray = secondLine.split("");
    const thirdLineArray = thirdLine.split("");
    const triplicate = firstLineArray.filter((letter) => secondLineArray.includes(letter) && thirdLineArray.includes(letter));
    return [...new Set(triplicate)];
}

let totalSum = 0

for (const group of groupLinesInGroupsOf3(lines)) {
    const triplicates = getTriplicateInGroupOf3(group)
    const number = letterToNumber(triplicates[0])
    totalSum += number
}

console.log(totalSum)

