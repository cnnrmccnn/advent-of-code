import { readFileSync } from 'fs';

function findNumbersBetween(range: string) {
  const minAndMax = range.split('-');
  const list: number[] = [];
  for (let i = parseInt(minAndMax[0]); i <= parseInt(minAndMax[1]); i++) {
    list.push(i);
  }
  return list;
}

const p2 = function () {
  const text = readFileSync('./2022/04/data/input.txt', 'utf8');
  const assignments = text.split('\n');
  let value: number = 0;
  assignments.forEach((elfPair) => {
    const elves = elfPair.split(',');
    let elfOneNumbers = findNumbersBetween(elves[0]);
    let elfTwoNumbers = findNumbersBetween(elves[1]);
    let elfOneMatch = elfOneNumbers.some((job) => elfTwoNumbers.includes(job));
    let elfTwoMatch = elfTwoNumbers.some((job) => elfOneNumbers.includes(job));
    if (elfOneMatch || elfTwoMatch) {
      value++;
    }
  });
  console.log(value);
};

p2();
