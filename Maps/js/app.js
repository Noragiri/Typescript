"use strict";
let ourFirstMap = new Map([
    [1, 2],
    [2, 4],
    [3, 6],
]);
console.log(ourFirstMap.set(4, 8));
console.log(ourFirstMap.get(2));
console.log(ourFirstMap.has(5));
console.log(ourFirstMap.delete(2));
console.log(ourFirstMap);
for (let element of ourFirstMap.keys()) {
    console.log(element);
}
for (let element of ourFirstMap.values()) {
    console.log(element);
}
for (let element of ourFirstMap.entries()) {
    console.log(element);
}
for (let [key, value] of ourFirstMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}
ourFirstMap.forEach((key, value) => console.log(`Key: ${key}, Value: ${value}`));
