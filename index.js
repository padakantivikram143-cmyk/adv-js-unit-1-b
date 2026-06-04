
const axios = require('axios');
const readlineSync = require('readline-sync');


const username = readlineSync.question('Enter your GitHub username: ');


function hitAPI(username) {
  const url = `https://api.github.com/users/${username}`;
  return axios.get(url);
}


hitAPI(username)
  .then((response) => {
    const data = response.data;
    console.log(`Name: ${data.name || 'No name provided'}`);
    console.log(`User Name: ${data.login}`);
    console.log(`The Followers on GitHub: ${data.followers}`);
  })
  .catch((error) => {
    console.log('❌ Error fetching data:', error.message);
  });
