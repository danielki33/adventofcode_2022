const fs = require('fs');
const readline = require('readline');

(async () => {
  //let max = 0;
  let current = 0;
  const cals = [];
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    if (line.trim().length === 0) {
			cals.push(current);
			current = 0;
    } else {
			const num = parseInt(line);
			current += num;
		}
  });

  await new Promise((res) => rl.once('close', res));
	//console.log(`Max is ${max}`);
  cals.sort( (a, b) => a - b);
  console.log(
    `Max is ${cals[cals.length - 1]} Top 3 is ${
      cals[cals.length - 1] + cals[cals.length - 2] + cals[cals.length - 3]
    }`
  );
})();
