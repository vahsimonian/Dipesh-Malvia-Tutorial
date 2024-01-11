const { chownSync } = require('fs');

const x = '1';
const y = '2';

console.log(x, y);

//%s format variable to string
//%d
//%i
//%o
// console.log('I am %s and my age is %d', 'Vah', 34);
// console.clear();
// console.count('Vah 0');
// console.count('Ros 1');
// console.count('Simon 2');

// console.countReset('I am Vah');
// console.count('Vah 3');

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);
const multiply = () =>
  console.log(`The multiplication of 2 and 3 is: ${2 + 3}`);

const measureTime = () => {
  console.time('sum()');
  sum();
  console.timeEnd('sum()');
  console.time('multiply()');
  multiply();
  console.timeEnd('multiply()');
};
measureTime();
