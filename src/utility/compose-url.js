function composeUrl(type, language, keyword) {
  return `https://api.github.com/search/${type}?q=${keyword}+language:${language}&sort=stars&order=desc`;
}

export default composeUrl;
