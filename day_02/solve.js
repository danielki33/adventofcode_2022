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
      score += 1;
      if (opp === 'A') {
        // draw
        score += 3;
      } else if (opp === 'C') {
        // Rock beats scissors
        score += 6;
      }
    } else if (me === 'Y') {
      score += 2;
      if (opp === 'B') {
        // draw
        score += 3;
      } else if (opp === 'A') {
        //  Paper beats rock
        score += 6;
      }
    } else if (me === 'Z') {
      score += 3;
      if (opp === 'C') {
        // draw
        score += 3;
      } else if (opp === 'B') {
        //  Scissors beat paper
        score += 6;
      }
    }
  });

  await new Promise((res) => rl.once('close', res));
	console.log(`Score is ${score}`);
})();
