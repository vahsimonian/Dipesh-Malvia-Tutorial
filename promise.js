function asyncTask() {
  return Promise.resolve();
}

asyncTask().then(() => console.log(name));

const name = 'Vah';
