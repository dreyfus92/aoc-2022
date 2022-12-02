import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);

type TheirMoveInput = 'A' | 'B' | 'C';
type MyMoveInput = 'X' | 'Y' | 'Z';
type MoveInput = `${TheirMoveInput} ${MyMoveInput}`

type Move = 'rock' | 'paper' | 'scissors';
type TheirMove = Move;
type MyMove = Move;

const theirMoveInputAsMove: Record<TheirMoveInput, Move> = {
    A: 'rock',
    B: 'paper',
    C: 'scissors',
} as const;

const myMoveInputAsMove: Record<MyMoveInput, Move> = {
    X: 'rock',
    Y: 'paper',
    Z: 'scissors',
} as const;

const outcomeScore: Record<TheirMove, Record<MyMove, number>> = {
    rock: { rock: 3, paper: 6, scissors: 0 },
    paper: { rock: 0, paper: 3, scissors: 6 },
    scissors: { rock: 6, paper: 0, scissors: 3 },
} as const;

const shapeScore: Record<MyMove, number> = { rock: 1, paper: 2, scissors: 3 } as const;

function solve(input: string) {
    let score = 0;
    for (const line of input.split('\n')) {
        const [theirMoveInput, myMoveInput] = (line as MoveInput).split(' ') as [TheirMoveInput, MyMoveInput];

        const theirMove = theirMoveInputAsMove[theirMoveInput];
        const myMove = myMoveInputAsMove[myMoveInput];

        score += outcomeScore[theirMove][myMove] + shapeScore[myMove];
    }
    console.log(score);

}
solve(input);

