import { readFileSync } from 'fs';

export interface Command {
  count: number;
  from: number;
  to: number;
}

export type Crate = string;
export type Stack = (Crate | undefined)[];
export type StockPile = Stack[];

export const parseInstructions = (rawInstructions: string): Command[] =>
  rawInstructions.split('\n').reduce((stockPile, stackLine) => {
    const te = stackLine.match(/\d+/g) as string[];
    stockPile.push({
      count: parseInt(te[0]),
      from: parseInt(te[1]),
      to: parseInt(te[2]),
    });
    return stockPile;
  }, [] as Command[]);

const parseStacks = (rawStacks: string): StockPile =>
  rawStacks.split('\n').reduce((stockPile, stackLine) => {
    for (let i = 0; i < stackLine.length; i = i + 4) {
      const crateId = stackLine[i + 1];
      const stock = stockPile[i / 4] ?? [];
      if (/[A-Z]/.test(crateId)) {
        stock.push(crateId);
      }
      stockPile[i / 4] = stock;
    }
    return stockPile;
  }, [] as StockPile);

const p1 = function () {
  const text = readFileSync('./2022/05/data/input.txt', 'utf8');
  const [rawStacks, rawInstructions] = text.split('\n\n');
  const stacks = parseStacks(rawStacks);
  stacks.unshift([]);
  const instructions = parseInstructions(rawInstructions);
  instructions.forEach((inst) => {
    const itemsToMove = stacks[inst.from].splice(0, inst.count);
    stacks[inst.to].unshift(...itemsToMove.reverse());
  });
  console.log(stacks.map((stack) => stack[0]).join(''));
};

p1();
