const crypto = require('crypto');

import { nameLengthLimit } from '../shared/constants';

export function genPlayerOrder(teamOne, teamTwo) {
	const shuffledTeamOne = shuffle(teamOne.slice());
	const shuffledTeamTwo = shuffle(teamTwo.slice());
	const playerOrder = [];
	if (Math.round(Math.random() * 1)) {
		for (const [i, v] of shuffledTeamOne.entries()) {
			playerOrder.push(v);
			playerOrder.push(shuffledTeamTwo[i]);
		}
	} else {
		for (const [i, v] of shuffledTeamTwo.entries()) {
			playerOrder.push(v);
			playerOrder.push(shuffledTeamOne[i]);
		}
	}
	return playerOrder;
}

export function genRandomString(len) {
	return crypto.randomBytes(len).toString('hex').substring(0, len).toUpperCase()
}

export function limitName(name) {
	return (name.length > nameLengthLimit ? name.substring(0, nameLengthLimit) : name).toUpperCase()
}

export function randomFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
