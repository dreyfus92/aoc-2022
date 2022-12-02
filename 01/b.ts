import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);

const elves = input.split("\n\n");

const amounts = [0];


for (const elf of elves) {
    const nums = elf.split("\n").map((s) => parseInt(s, 10));
    const total = nums.reduce((a, b) => a + b, 0);

    amounts.push(total);
}

const topThree = amounts.sort((a, b) => b - a).slice(0, 3);

const total = topThree.reduce((a, b) => a + b, 0);

console.log("total", total);

