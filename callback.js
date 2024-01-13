console.log('Task start');
function asyncTask(cb) {
  console.log('Task is running');
  setTimeout(() => {
    cb(null, 'Data from asyncFunction');
  });
}
asyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log('data', data);
  }
});
console.log('Task end');
const name = 'Vah';
