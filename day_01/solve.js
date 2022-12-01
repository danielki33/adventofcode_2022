const fs = require('fs');
const readline = require('readline');

(async () => {
  let max = 0;
  let current = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    if (line.trim().length === 0) {
			if (current > max) {
				max = current;
			}
			current = 0;
    } else {
			const num = parseInt(line);
			current += num;
		}
  });

  await new Promise((res) => rl.once('close', res));
	console.log(`Max is ${max}`);
})();
