import { readFileSync } from 'fs';

const p1 = function () {
	const text = readFileSync('./2022/01/data/input.txt', 'utf8');
	const elves = text.split('\n\n');
	let elf_total_calories: number[] = [];
	elves.forEach((element) => {
		let calories = element.split('\n').map(Number);
		const sum = calories.reduce((partialSum, a) => partialSum + a, 0);
		elf_total_calories.push(sum);
	});

	let sorted = elf_total_calories.sort((n1, n2) => n1 - n2);

	console.log(sorted[sorted.length - 1]);
};

p1();
