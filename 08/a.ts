import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);


const lines = input.replaceAll("\r", "").split("\n");
const grid = lines.map((line) => line.split("").map((c) => Number(c)));

const outerTrees = 4 * grid.length - 4;
let innerTrees = 0;
let highestScore = 0;

const isVisibleInDirection = (treeHeight: number, trees: number[]) => {
    for (const tree of trees) if (treeHeight <= tree) return false;
    return true;
};

const getScoreInDirection = (treeHeight: number, trees: number[]) => {
    let score = 0;
    for (const tree of trees) {
        score++;
        if (treeHeight <= tree) break;
    }
    return score;
};

for (let y = 1; y < grid.length - 1; y++) {
    for (let x = 1; x < grid[y].length - 1; x++) {
        const height = grid[y][x];

        const row = grid[y].slice();
        const col = grid.map((row) => row[x]);

        const left: number[] = row.slice(0, x).reverse();
        const right: number[] = row.slice(x + 1);
        const up: number[] = col.slice(0, y).reverse();
        const down: number[] = col.slice(y + 1);

        const isVisible = [left, right, up, down]
            .map((direction) => isVisibleInDirection(height, direction))
            .includes(true);

        if (isVisible) innerTrees++;

        const totalScore = [left, right, up, down]
            .map((direction) => getScoreInDirection(height, direction))
            .reduce((a, b) => a * b);

        if (totalScore > highestScore) highestScore = totalScore;
    }
}

console.log("Part 1: " + (outerTrees + innerTrees));
console.log("Part 2: " + highestScore);


