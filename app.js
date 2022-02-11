import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const getAllItems = async () => {
  try {
    const response = await axios.get(BASE);

    const allItems = response.data;

    console.log(moreThanFive(allItems));
    console.log(lastFiveUp(allItems));
    console.log(sumStars(allItems));
  } catch (errors) {
    console.error(errors);
  }
};
getAllItems();
// const repos = getAllItems()
// .then((result) => console.log(result))
// .catch((err) => {
// console.error(err);
// });

const moreThanFive = (repos) => {
  const fiveStars = repos.filter((repo) => repo.stargazers_count > 5);

  return fiveStars;
};

const lastFiveUp = (repos) => {
  const dates = repos
    .map((repo) => repo.updated_at)
    .sort()
    .slice(-5);

  return dates;
};

const sumStars = (repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const allStars = repos.map((repo) => repo.stargazers_count).reduce(reducer);

  return allStars;
};
