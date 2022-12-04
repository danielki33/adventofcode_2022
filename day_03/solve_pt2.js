const fs = require('fs');
const readline = require('readline');

(async () => {
  let score = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  let lineNum = 0;
  let seen = {};
  rl.on('line', (line) => {
    if (lineNum %3 === 0) {
      seen = {};
      for (let i = 0; i < line.length; i++) {
        seen[line.charAt(i)] = 1;
      }
    } else if (lineNum %3 === 1) {
      for (let i = 0; i < line.length; i++) {
        if (seen[line.charAt(i)]) {
          seen[line.charAt(i)] = 2;
        }
      }
    } else {
      for (let i = 0; i < line.length; i++) {
        if (seen[line.charAt(i)] === 2) {
          console.log(`Line ${lineNum} match ${line.charAt(i)}`);
          const char = line.charAt(i);
          if (char >= 'a' && char <= 'z') {
            score += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            console.log(`lc ${score} ${char}`);
          } else {
            score += char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
            console.log(`uc ${score}`);
          }
          break;
        }
      }
    }

    lineNum++
  });

  await new Promise((res) => rl.once('close', res));
	console.log(`Score is ${score}`);
})();
