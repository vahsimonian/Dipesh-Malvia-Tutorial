//

function asyncTask(cb) {
  console.log('Task is running');
  setTimeout(() => {
    cb(null, 'Data from asyncFunction');
  });
}
