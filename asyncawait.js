const userLogin = () => {
  console.log('Enter Username and Password');
  let username = prompt('Enter username: ');
  let password = prompt('Enter password: ');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Performing User Authentication');
      if (username === 'vah' && password === 'vah') {
        resolve('User Authenticated');
      } else {
        reject('Authentication failed');
      }
    }, 1000);
  });
};

function goToHomePage(userAuthStatus) {
  return Promise.resolve(`Go to Homepage as : ${userAuthStatus}`);
}
