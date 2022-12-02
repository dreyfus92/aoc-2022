import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);
//Rules
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock
// win = 6, draw = 3, lose = 0
const outcomeScore = {
    A: { X: 3, Y: 6, Z: 0 },
    B: { X: 0, Y: 3, Z: 6 },
    C: { X: 6, Y: 0, Z: 3 },
} as const;

const shapeScore = { X: 1, Y: 2, Z: 3 } as const;

const chooseShape = {
    A: { X: 'Z', Y: 'X', Z: 'Y' },
    B: { X: 'X', Y: 'Y', Z: 'Z' },
    C: { X: 'Y', Y: 'Z', Z: 'X' },
} as const;

function solve(input: string, part: number) {
    let score = 0;
    for (const line of input.split('\n')) {
        let [a, b] = line.split(' ') as ['A' | 'B' | 'C', 'X' | 'Y' | 'Z'];
        if (part === 2) b = chooseShape[a][b];
        score += outcomeScore[a][b] + shapeScore[b];
    }
    console.log(score);

}
solve(input, 1);
solve(input, 2);






// const rounds = input.split('\n')
// const uniqueRounds = [...new Set(rounds)];
// console.log(uniqueRounds);



// function checkRound(round: string) {
//     let scoreA = 0;
//     let scoreB = 0;
//     switch (round) {
//         case "A X":
//             scoreA += 4,
//                 scoreB += 4
//             break;
//         case "A Y":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "A Z":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "B X":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "B Y":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "B Z":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "C X":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "C Y":
//             scoreA += 3,
//                 scoreB += 3
//             break;
//         case "C Z":
//             scoreA += 3,
//                 scoreB += 3
//             break;

//     }
//     return scoreA
// }



