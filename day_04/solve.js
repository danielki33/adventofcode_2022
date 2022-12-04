const fs = require('fs');
const readline = require('readline');

(async () => {
  let score_pt1 = 0;
  let score_pt2 = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    const [first, second] = line.split(',');
    const [ firstMin, firstMax ] = first.split('-').map( a => parseInt(a));
    const [ secondMin, secondMax ] = second.split('-').map( a => parseInt(a));
    if (firstMin <= secondMin && firstMax >= secondMax) {
      console.log(`Found line ${line}`);
      score_pt1 += 1;
    } else if (secondMin <= firstMin && secondMax >= firstMax) {
      console.log(`Found line ${line}`);
      score_pt1 += 1;
    }

    if (secondMin >= firstMin && secondMin <= firstMax) {
      score_pt2 += 1;
    } else if (firstMin >= secondMin && firstMin <= secondMax) {
      score_pt2 += 1;
    }
  });

  await new Promise((res) => rl.once('close', res));
	console.log(`Pt 1 Score is ${score_pt1}`);
  console.log(`Pt 2 Score is ${score_pt2}`);
})();
