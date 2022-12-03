import { readFileSync } from 'fs';

// A = Rock = 1
// B = Paper = 2
// C = Scissors = 3

// X = lose
// Y = draw
// Z = win

type MyMove = 'X' | 'Y' | 'Z';
type OpponentMove = 'A' | 'B' | 'C';

function determineMoveScore(opponentMove: OpponentMove, myMove: MyMove) {
	switch (myMove) {
		// lose
		case 'X':
			switch (opponentMove) {
				case 'A':
					return 3;
				case 'B':
					return 1;
				case 'C':
					return 2;
			}
		// draw
		case 'Y':
			switch (opponentMove) {
				case 'A':
					return 1;
				case 'B':
					return 2;
				case 'C':
					return 3;
			}
		// win
		case 'Z':
			switch (opponentMove) {
				case 'A':
					return 2;
				case 'B':
					return 3;
				case 'C':
					return 1;
			}
	}
}

function determineOutcome(myMove: MyMove) {
	switch (myMove) {
		case 'X':
			return 0;
		case 'Y':
			return 3;
		case 'Z':
			return 6;
	}
}

const p2 = function () {
	const text = readFileSync('./2022/02/data/input.txt', 'utf8');
	const games = text.split('\n');
	let total_score: number = 0;
	games.forEach((game) => {
		const opponentMove = game[0] as OpponentMove;
		const myMove = game[2] as MyMove;
		total_score += determineMoveScore(opponentMove, myMove);
		total_score += determineOutcome(myMove);
	});
	console.log(total_score);
};

p2();
