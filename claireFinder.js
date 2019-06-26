const fs = require('fs');

const generateNumbers = (andFilter = []) => {
  let nums = [];
  for(let i = 1111111; i < 7777778; i++) {
    nums.push(i);
  };
  let stringified = nums.map(num => num.toString());
  let formatted = stringified.map(num => `${num.slice(0,3)}-${num.slice(3)}`);
  let defaultFiltered = formatted.filter(num => num.indexOf('0') === -1)
    .filter(num => num.indexOf('4') === -1)
    .filter(num => num.indexOf('6') === -1)
    .filter(num => num.indexOf('8') === -1)
    .filter(num => num.indexOf('9') === -1)
    .filter(num => num.indexOf('22') === -1)
    .filter(num => num.indexOf('33') === -1)
    .filter(num => num.indexOf('55') === -1)
    .filter(num => num.indexOf('77') === -1)
    .filter(num => num.indexOf('111') === -1)

  let maybeTwoFiltered = !andFilter.includes(2) && !andFilter.includes('2')
    ? defaultFiltered
    : defaultFiltered.filter(num => num.indexOf('2') === -1)

  const oneRegex = RegExp('[^1]1[^1]');
  let maybeOneFiltered = !andFilter.includes(1) && !andFilter.includes('1')
    ? maybeTwoFiltered
    : maybeTwoFiltered
      .map((num) => (
        num.indexOf('11') === -1 && num.indexOf('1') > -1
          ? null // if there's no '11' but there are one or more '1's
          : num
      ))
      .filter(num => num !== null)
      .filter(num => !oneRegex.test(num))
      .filter(num => num.slice(0,1) === '1'
        ? num.slice(1,2) !== '1'
          ? false
          : true
        : true
      )
      .filter(num => num.slice(-1) === '1'
        ? num.slice(-2, -1) !== '1'
          ? false
          : true
        : true
      )

  return maybeOneFiltered;
}

const outputFile = fs.createWriteStream('PossibleClaireNumbers.txt');
outputFile.on('error', err => null);
outputFile.write('Assuming that 1 is not prime, and there are 2s:\n');
const no1 = generateNumbers([1]);
no1.forEach(line => outputFile.write(line + '\n'));
outputFile.write("\nAssuming that 1 isn't prime and there are no 2s:\n");
const no12 = generateNumbers([1, 2]);
no12.forEach(line => outputFile.write(line + '\n'));
outputFile.write('\nAssuming 1 is prime and there are 2s:\n');
const all = generateNumbers();
all.forEach(line => outputFile.write(line + '\n'));
outputFile.end()
