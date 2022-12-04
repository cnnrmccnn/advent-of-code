import { readFileSync } from "fs";

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const index = (alphabet + alphabet.toUpperCase()).split("");

const p2 = function () {
  const text = readFileSync("./2022/03/data/input.txt", "utf8");
  const rucksacks = text.split("\n");
  let duplicates: string[] = [];
  let value: number = 0;
  for (let i = 0; i <= rucksacks.length - 3; i += 3) {
    rucksacks[i].split("").find((first) => {
      if (
        rucksacks[i + 1].includes(first) &&
        rucksacks[i + 2].includes(first)
      ) {
        duplicates.push(first);
        value += index.indexOf(first) + 1;
        return true;
      }
    });
  }
  console.log(duplicates);
  console.log(value);
};

p2();
