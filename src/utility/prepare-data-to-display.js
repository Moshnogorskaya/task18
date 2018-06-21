function cutString(string, desiredLength) {
  if (!string || string.length < desiredLength) {
    return string;
  }
  return `${string.slice(0, desiredLength)}...`;
}

function findSavedIDs(repos) {
  const savedRepos = repos.filter(repo => repo.archived);
  return savedRepos.map(repo => repo.id);
}

function prepareDataToDisplay(repo, savedRepos) {
  const newRepo = repo;
  newRepo.topics = newRepo.topics.slice(0, 3);
  newRepo.description = cutString(repo.description, 90);
  const ids = findSavedIDs(savedRepos);
  newRepo.archived = ids.includes(repo.id);
  return newRepo;
}

export default prepareDataToDisplay;
