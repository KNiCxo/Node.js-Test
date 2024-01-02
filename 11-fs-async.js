const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  
    const second = result;
    writeFile(
      './content/fourth.txt', 
      `Here is the result: ${first}, ${second}`,
      {flag: 'a'},
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with task');
      });
  });
});
console.log('starting next task');