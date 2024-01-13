console.log('start operation');
function sleep(miliseconds) {
  console.log('operation is running');
  setTimeout(() => {
    console.log('operation is done');
  }, miliseconds);
}

sleep(1000);

console.log('do something else..');
