import { readFileSync } from "fs";

/**
 * getLastFewAndCombined
 * @param sortedArr The sorted array
 * @param lastFew the number of items you would like returned
 * @returns the last few items of the given array and their combined total
 */
const getLastFewAndCombined = function (sortedArr: number[], lastFew: number) {
  let lastFewElves: number[] = [];
  let combined = 0;
  for (let index = lastFew; index > 0; index--) {
    lastFewElves.push(sortedArr[sortedArr.length - index]);
    combined += sortedArr[sortedArr.length - index];
  }
  return [lastFewElves, combined];
};

const p2 = function () {
  const text = readFileSync("./2022/01/data/input.txt", "utf8");
  const elves = text.split("\n\n");
  let elf_total_calories: number[] = [];
  elves.forEach((element) => {
    let calories = element.split("\n").map(Number);
    const sum = calories.reduce((partialSum, a) => partialSum + a, 0);
    elf_total_calories.push(sum);
  });

  let sorted = elf_total_calories.sort((n1, n2) => n1 - n2);

  const [lastFewCalories, combined] = getLastFewAndCombined(sorted, 3);
  console.log(lastFewCalories);
  console.log(combined);
};

p2();
