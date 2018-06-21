import axios from 'axios';

function getGithubData(url) {
  return axios.get(url, {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json',
    },
  });
}

export default getGithubData;
