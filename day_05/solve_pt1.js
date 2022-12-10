const fs = require('fs');
const readline = require('readline');

(async () => {
  let buildingStacks = true;
  let movingStacks = false;
  const stacks = [
  ];

  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity,
  });
  rl.on('line', (line) => {
    if (buildingStacks) {
      // first line
      if (line.trim().length === 0) {
        buildingStacks = false;
        movingStacks = true;
      } else {
        const row = line.match(/.{1,4}/g);
        if (stacks.length === 0) {
          row.forEach( () => stacks.push([]));
        }
        row.forEach( (stackBox, i) => {
          if (stackBox.trim().length > 0) {
            stacks[i].unshift(stackBox.charAt(1));
          }
        });
      }
    } else if (movingStacks) {
      const [_m , count, from, to] = line.match(/^move (\d+) from (\d+) to (\d+)$/);
      for (let i = 0; i < count; i++) {
        if (stacks[from-1].length > 1) {
          const box = stacks[from-1].pop();
          stacks[to-1].push(box);
        }
      }
    }
  });

  await new Promise((res) => rl.once('close', res));

  for (let i = 0; i < stacks.length; i++) {
    if (stacks[i].length > 1) {
      console.log(stacks[i][stacks[i].length - 1]);
    }
  }
})();
