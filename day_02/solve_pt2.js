const fs = require('fs');
const readline = require('readline');

(async () => {
  let score = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    const [ opp, me ] = line.split(' ');
    if (me === 'X') {
      // Lose
      if (opp === 'A') {
        // rock - I need scissors
        score += 3;
      } else if (opp === 'B') {
        // paper - I need rock
        score += 1;
      } else if (opp === 'C') {
        // scissors - I need paper
        score += 2;
      } 
    } else if (me === 'Y') {
      // Draw
      score += 3;
      if (opp === 'A') {
        // rock - I need rock
        score += 1;
      } else if (opp === 'B') {
        // paper - I need paper
        score += 2;
      } else if (opp === 'C') {
        // scissors - I need scissors
        score += 3;
      } 
    } else if (me === 'Z') {
      // Win
      score += 6;
      if (opp === 'A') {
        // rock - I need paper
        score += 2;
      } else if (opp === 'B') {
        // paper - I need scissors
        score += 3;
      } else if (opp === 'C') {
        // scissors - I need rock
        score += 1;
      } 
    }
  });

  await new Promise((res) => rl.once('close', res));
	console.log(`Score is ${score}`);
})();
