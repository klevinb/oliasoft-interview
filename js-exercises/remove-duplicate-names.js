/**
 * Write a function which will remove the duplicate strings from an array
 * If we have this array: ["Fredrik", "Steffen", "Fredrik", "Klevin"] we want to remove
 * one of the strings which is equal to "Fredrik" since it is a duplicate element
 * and the result of the function would be this: ["Fredrik", "Steffen", "Klevin"]
 */

// Solution as prefered

const names = ["Fredrik", "Steffen", "Fredrik", "Klevin"];

let nonDuplicatedNames = [];

for (let i = 0; i < names.length; i++) {
  if (!nonDuplicatedNames.includes(names[i])) {
    nonDuplicatedNames.push(names[i]);
  }
}

console.log("nonDuplicatedNames", nonDuplicatedNames);

// Solution with reduce()
// WIKI for reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
