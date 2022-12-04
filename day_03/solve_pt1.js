const fs = require('fs');
const readline = require('readline');

(async () => {
  let score = 0;
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    const first = line.substring(0, line.length/2);
    const second = line.substring(line.length/2);
    const first_chars = {}
    for ( let i = 0; i < first.length; i++) {
      first_chars[first.charAt(i)] = 1;
    }
    let char;
    for (let i = 0; i < second.length; i++) {
      if (first_chars[second.charAt(i)]) {
        console.log("Found the char" + second.charAt(i));
        char = second.charAt(i);
        break;
      }
    }
    if (char) {
      if (char >= 'a' && char <= 'z') {
        score += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        console.log(`lc ${score} ${char}`);
      } else {
        score += char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
        console.log(`uc ${score}`);
      }
    }
  });

  await new Promise((res) => rl.once('close', res));
	console.log(`Score is ${score}`);
})();
