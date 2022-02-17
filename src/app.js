import "regenerator-runtime/runtime";
import axios from "axios";

const BASE = "https://api.github.com/orgs/stackbuilders/repos";

const mkRepo = (item) => {
  return {
    name: item.name,
    stars: item.stargazers_count,
    date: item.updated_at,
  };
};

const getAllItems = async (repoManager) => {
  try {
    const response = await repoManager.get(BASE);

    const items = response.data.map(mkRepo);
    console.log(items);
    console.log(moreThanFive(items));
    console.log(lastFiveUp(items));
    console.log(sumStars(items));
  } catch (errors) {
    console.error(errors);
  }
};
getAllItems(axios);

const moreThanFive = (repos) => {
  return repos.filter((repo) => repo.stars > 5);
};

const lastFiveUp = (repos) => {
  const dates = repos
    .map((repo) => repo.date)
    .sort()
    .slice(-5);

  return dates;
};

const sumStars = (repos) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return repos.map((repo) => repo.stars).reduce(reducer);
};
