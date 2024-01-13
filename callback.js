console.log('Task start');

function asyncTask(cb) {
  cb();
}

asyncTask(() => console.log(name));

const name = 'Vah';
