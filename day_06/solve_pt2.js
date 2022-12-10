const fs = require('fs');
const readline = require('readline');

// TODO: the only difference is the unique window size. Should maybe just make this an argument if I have time
(async () => {
  const contents = fs.readFileSync('./input.txt');
  const buffer = contents.toString();
  const window = buffer.substring(0,14).split('');
  for (let i = 14; i < buffer.length + 1; i++) {
    const unique = window.filter( (value, index, self) => (self.indexOf(value) === index));
    if (unique.length === 14) {
      console.log(`Answer is ${i}`);
      return;
    } else {
      window.shift();
      window.push(buffer.charAt(i))
    }
  }
})();
