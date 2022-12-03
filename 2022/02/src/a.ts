import { readFileSync } from 'fs';

// A/X = Rock
// B/Y = Paper
// C/Z = Scissors

type MyMove = 'X' | 'Y' | 'Z';
type OpponentMove = 'A' | 'B' | 'C';

function determineMoveScore(move: MyMove) {
	switch (move) {
		case 'X':
			return 1;
		case 'Y':
			return 2;
		case 'Z':
			return 3;
	}
}

function determineOutcome(opponentMove: OpponentMove, myMove: MyMove) {
	switch (opponentMove) {
		case 'A':
			switch (myMove) {
				case 'Y':
					return 6;
				case 'Z':
					return 0;
				case 'X':
					return 3;
			}
		case 'B':
			switch (myMove) {
				case 'Z':
					return 6;
				case 'X':
					return 0;
				case 'Y':
					return 3;
			}
		case 'C':
			switch (myMove) {
				case 'X':
					return 6;
				case 'Y':
					return 0;
				case 'Z':
					return 3;
			}
	}
}

const p1 = function () {
	const text = readFileSync('./2022/02/data/input.txt', 'utf8');
	const games = text.split('\n');
	let total_score: number = 0;
	games.forEach((game) => {
		const opponentMove = game[0] as OpponentMove;
		const myMove = game[2] as MyMove;
		total_score += determineMoveScore(myMove);
		total_score += determineOutcome(opponentMove, myMove);
	});
	console.log(total_score);
};

p1();
