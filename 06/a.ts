import * as p from "https://deno.land/std@0.165.0/path/mod.ts";
const input = await Deno.readTextFile(
    p.fromFileUrl(import.meta.resolve("./input.txt")),
);
//Part 1
let [l, r] = [0, 4];
let a = -1;
while (r < input.length) {
    const packet = new Set(input.slice(l, r));
    if (packet.size == 4) {
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
    const packet = new Set(input.slice(l2, r2));
    if (packet.size == 14) {
        a2 = r2;
        break;
    } else {
        r2 += 1;
        l2 += 1;
    }
}

console.log(a2)

