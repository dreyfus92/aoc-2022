import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);
//Part 1
const text = input.slice();
let [l, r] = [0, 4];
let a = -1;
while (r < input.length) {
    const window = new Set(input.slice(l, r));
    if (window.size == 4) {
        a = r;
        break;
    } else {
        r += 1;
        l += 1;
    }
}
console.log(a);

//Part 2

let [l2, r2] = [0, 14];
let a2 = -1;
while (r2 < input.length) {
    const window = new Set(input.slice(l2, r2));
    if (window.size == 14) {
        a2 = r2;
        break;
    } else {
        r2 += 1;
        l2 += 1;
    }
}

console.log(a2)

