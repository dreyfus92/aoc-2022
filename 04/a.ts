import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);

const lines = input.split("\n")

const result = lines
    .map((pair) => {
        const [[a, b], [c, d]] = pair
            .split(",")
            .map((s) => s.split("-").map((s) => parseInt(s, 10)))
            .sort();
        return (a <= c && d <= b) || (c <= a && b <= d);
    }).filter((x) => x).length;

console.log(result);



