const fs = require('fs');
const readline = require('readline');

(async () => {
  const contents = fs.readFileSync('./input.txt');
  const buffer = contents.toString();
  const window = buffer.substring(0,4).split('');
  console.dir(window);
  for (let i = 4; i < buffer.length + 1; i++) {
    const unique = window.filter( (value, index, self) => (self.indexOf(value) === index));
    if (unique.length === 4) {
      console.log(`Answer is ${i}`);
      return;
    } else {
      window.shift();
      window.push(buffer.charAt(i))
    }
  }
})();
