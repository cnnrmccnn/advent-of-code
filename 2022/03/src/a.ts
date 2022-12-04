import { readFileSync } from 'fs';

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const index = (alphabet + alphabet.toUpperCase()).split('');

const p1 = function () {
  const text = readFileSync('./2022/03/data/input.txt', 'utf8');
  const rucksacks = text.split('\n');
  let duplicates: string[] = [];
  let value: number = 0;
  rucksacks.forEach((rucksack) => {
    const middle = rucksack.length / 2;
    let firstHalf = rucksack.substring(0, middle).split('');
    let secondHalf = rucksack.substring(middle).split('');
    firstHalf.find((first) => {
      if (secondHalf.includes(first)) {
        duplicates.push(first);
        value += index.indexOf(first) + 1;
        return true;
      }
    });
  });
  console.log(duplicates);
  console.log(value);
};

p1();
