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
// const Repos = getAllItems()
// .then((result) => console.log(result))
// .catch((err) => {
// console.error(err);
// });

const moreThanFive = (Repos) => {
  const fiveStars = Repos.filter((Repo) => Repo.stargazers_count > 5);

  return fiveStars;
};

const lastFiveUp = (Repos) => {
  const dates = Repos.map((Repo) => Repo.updated_at)
    .sort()
    .slice(-5);

  return dates;
};

const sumStars = (Repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const allStars = Repos.map((Repo) => Repo.stargazers_count).reduce(reducer);

  return allStars;
};
