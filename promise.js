const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This API executed in: ' + time);
    }, time);
  });
};

const multiApiCall = [
  makeApiCall(1000),
  makeApiCall(2000),
  makeApiCall(3000),
  makeApiCall(4000),
];

Promise.all(multiApiCall).then((values) => {
  console.log(values);
});

Promise.race(multiApiCall).then((value) => {
  console.log(value);
});
