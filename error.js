// Error object

// const error = new Error('Something went wrong');
// console.log(error.stack);
// console.log(error.message);

// throw new Error('I am the error object');

const { CustomError } = require('./CustomError');
// throw new CustomError('I am the new custom Error object');

// Handle try and catch

// try {
//   doSomething();
// } catch (error) {
//   console.log('Error Occured');
//   console.log(error);
// }

function doSomething() {
  //   const data = fetch('localhost:300/api');
  console.log('I am from DO function');
  const data = 'I am from the DO function ';
  return data;
}

// Uncaught exception

// process.on('uncaught exception', (error) => {
//   console.log('There was an uncaught exception', error);
//   process.exit(1);
// });

// doSomething();

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve(doSomething());
//   } else {
//     reject(doSomething());
//   }
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log('Error Occured');
//     console.log(error);
//   });

const someFunction = async () => {
  try {
    await doSomething();
  } catch (error) {
    throw CustomError(error.message);
  }
};

someFunction();
