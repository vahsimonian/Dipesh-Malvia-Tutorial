//

function asyncTask(cb) {
  console.log('Task is running');
  setTimeout(() => {
    cb(null, 'Data from asyncFunction');
  });
}

function makeApiCall(cb) {
  setTimeout(() => {
    console.log('This is Async Task execution');
  }, 0);
}

makeApiCall(() => {
  makeApiCall(() => {
    asyncTask(() => {
      asyncTask(() => {
        asyncTask(() => {});
      });
    });
  });
});
