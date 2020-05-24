import fs from 'fs';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();

const team = 'Man United';

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === team && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === team && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1;
  }
}

// console.log(reader.data);

console.log(`${team} has won ${manUnitedWins} match`);
